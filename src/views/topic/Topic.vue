<template>
    <div>
        <div class="operation">
            <Button type="primary" @click="addTopic" shape="circle">新建Topic</Button>
        </div>
        <br/>
        <br/>
        <Table border :columns="columns" :data="this.topic.topicList"></Table>
    </div>
</template>

<style type="text/css" scoped>
    .operation{
        float: right;
        padding-right: 20px;
    }

</style>

<script>
    import Cookies from 'js-cookie';
    import { mapState, mapActions } from 'vuex'

    export default {
        data () {
            return {
                columns: [
                    {
                        title: '队列名',
                        width:100,
                        key: 'topic_name',
                        render: (h, params) => {
                            return h('div', [
/*                                h('Icon', {
                                    props: {
                                        type: 'person'
                                    }
                                }),*/
                                h('strong', params.row.topic.topic_name)
                            ]);
                        }
                    },
                    {
                        title: '描述',
                        key: 'desc',
                    },
                    {
                        title: '服务',
                        key: 'service'
                    },
                    {
                        title: 'lookup地址',
                        width:170,
                        key: 'nsqlookup_addr'
                    },
                    {
                        title: '秘钥',
                        key: 'secret_name'
                    },
                    {
                        title: '类型',
                        width:70,
                        key: 'type'
                    },
                    {
                        title: '队列类型',
                        width:90,
                        key: 'topic_type',
                        render: (h,params) =>{
                            return h('div',params.row.topic.topic_type);
                        }
                    },
                    {
                        title: '分区',
                        key: 'partition',
                        width:70,
                        render: (h,params) =>{
                            return h('div',params.row.topic.partition);
                        }
                    },
                    {
                        title: '副本',
                        key: 'replicator',
                        width:70,
                        render: (h,params) =>{
                            return h('div',params.row.topic.replicator);
                        }
                    },
                    {
                        title: '留存时间',
                        width:90,
                        key: 'retention',
                        render: (h,params) =>{
                            return h('div',params.row.topic.retention);
                        }
                    },
                    {
                        title: '创建时间',
                        key: 'create_at'
                    },
                    {
                        title: '集群',
                        width:70,
                        key: 'cluster_id'
                    },
                    {
                        title: '用户',
                        width:90,
                        key: 'user_id'
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
                                            this.show(params.index)
                                        }
                                    }
                                }, '摘要'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
            }
        },
        beforeCreate(){

        },
        created(){

            let ticket = this.$route.query.ticket;
            //this.ListTopic();
            let token = Cookies.get("token");
            if (ticket !== undefined && Cookies.get("token") ==="be deled"){
                let token =  Cookies.get("token");
                //this.ListTopic();
                // 登录成功后，请求带上name， 后端根据 验证后设置到session 的name去 不再拦截
                this.LoginCas(ticket);
                // window.location.href = '/topic'
                this.$router.push({name:"Topic"})
                console.log("here is the ticket", ticket)
                return
            }

            this.ListTopic();
        },

        computed: {
          ...mapState([
              'topic',
              'cas'
          ])
        },

        methods: {
            ...mapActions([
                'ListTopic',
                'LoginCas'
            ]),
            addTopic(){
                this.$router.push({path: '/topic/add'})
            },

            show (index) {
                this.$Modal.info({
                    title: 'Topic Info',
                    content: `Name：${this.topic.topicList[index].topic.topic_name}<br>desc：${this.topic.topicList[index].desc}<br>`
                })
            },
            remove (index) {
                this.data6.splice(index, 1);
            }
        }
    }
</script>