<template>
    <div>
        <div class="operation">
            <Button type="primary" @click="toAddCluster" shape="circle">新建集群</Button>
        </div>
        <br>
        <Table style="margin-top: 38px" border :columns="columns" :data="this.cluster.clusterList"></Table>

        <div>
            <Modal
                    v-model="modal"
                    title="删除确认"
                    @on-ok="ok"
                    @on-cancel="cancel">
                <p>确认删除集群 {{this.delData.cluster_name}} 吗?</p>
            </Modal>
        </div>
    </div>
</template>

<style type="text/css" scoped>
    .operation {
        float: right;
        padding-right: 20px;
    }

</style>

<script>
    import {parseTime} from '../../utils/index'
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                test: 'hello',
                modal: false,
                columns: [
                    {
                        title: '集群名',
                        width: 100,
                        key: 'cluster_name',
                        render: (h, params) => {
                            return h('div', [
                                h('strong', params.row.cluster_name)
                            ]);
                        }
                    },
                    {
                        title: '描述',
                        key: 'desc',
                    },
                    {
                        title: 'lookup地址',
                        key: 'nsqlookup_addr'
                    },
                    {
                        title: '机房',
                        width: 170,
                        key: 'computer_room'
                    },
                    {
                        title: '添加时间',
                        key: 'create_at',
                        render: (h, params) => {
                            return h('div', [
                                h('strong', parseTime(params.row.create_at))
                            ]);
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.delete(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
                delData: {
                    id: '',
                    cluster_name: ''
                }
            }
        },

        mounted() {
            this.ListCluster(true);
        },

        computed: {
            ...mapState([
                'cluster',
            ])
        },

        methods: {
            ...mapActions([
                'ListCluster',
                'DelCluster'
            ]),
            toAddCluster() {
                this.$router.push({path: '/cluster/add'})
            },
            edit(index) {
                this.$router.push({path: `/cluster/edit/${index}`})
            },
            delete(index) {
                this.modal = true;
                this.delData.id = this.cluster.clusterList[index].id;
                this.delData.cluster_name = this.cluster.clusterList[index].cluster_name;
            },
            ok() {
                // todo, get uId
                let userId = 1
                this.DelCluster({clusterId: this.delData.id, userId: userId});
                this.$Message.info('删除');
                this.refresh();
            },
            refresh() {
                setTimeout(() => {
                    this.ListCluster(true);
                }, 1500);
            },
            cancel() {
                this.$Message.info('取消');
            }
        }
    }
</script>