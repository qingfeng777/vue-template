<template>
    <div>
        <h4>XX集群内的XXtopic下的channel信息</h4>
        <br/>
        <Table border :columns="columns" :data="this.topic.topicList"></Table>

        <!--add channel-->

        <div style="margin-top: 50px">
            <h4>新建channel</h4>
            <!--<Alert style="width: 20%">
                <h4>新建channel</h4>
            </Alert>-->
            <Row style="margin-top: 30px">
                <Col span="24" >

                    <div style="" class="">
                        <Form :model="formItem" :label-width="80">
                            <Form-item label="服务名">
                                <Input v-model="formItem.input" placeholder="请输入生产消息的服务"></Input>
                            </Form-item>
                            <Form-item label="topic名">
                                <Input v-model="formItem.input" placeholder="请输入topic名称"></Input>
                            </Form-item>
                            <Form-item label="描述">
                                <Input v-model="formItem.input" placeholder="请输入描述信息"></Input>
                            </Form-item>
                            <Form-item label="秘钥">
                                <Input v-model="formItem.input" placeholder="请输入秘钥"></Input>
                            </Form-item>

                            <Form-item label="集群选择">
                                <Select class="halfWidth paddingLeft"  v-model="formItem.select" placeholder="请选择集群">
                                    <Option value="beijing">北京市</Option>
                                    <Option value="shanghai">上海市</Option>
                                    <Option value="shenzhen">深圳市</Option>
                                </Select>
                            </Form-item>
                            <Form-item style="float: right;margin-right: 20%">
                                <Button type="primary">提交</Button>
                                <Button type="primary" style="margin-left: 8px">取消</Button>
                            </Form-item>
                        </Form>

                    </div>

                </Col>



            </Row>
        </div>
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
                        title: 'channel名',
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
                        title: '秘钥',
                        key: 'secret_name'
                    },
                    {
                        title: '未确认',
                        width:170,
                        key: 'nsqlookup_addr'
                    },

                    {
                        title: '超时',
                        width:70,
                        key: 'type'
                    },
                    {
                        title: '延迟',
                        width:90,
                        key: 'topic_type',
                        render: (h,params) =>{
                            return h('div',params.row.topic.topic_type);
                        }
                    },
                    {
                        title: '总数',
                        key: 'partition',
                        width:70,
                        render: (h,params) =>{
                            return h('div',params.row.topic.partition);
                        }
                    },
                    {
                        title: '连接数',
                        key: 'replicator',
                        width:70,
                        render: (h,params) =>{
                            return h('div',params.row.topic.replicator);
                        }
                    },
                    {
                        title: '删除',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
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
                formItem: {
                    input: '',
                    topicType: 0,
                    select: [
                        'heelo',
                        'world'
                    ],
                    radio: 'male',
                    checkbox: [],
                    switch: true,
                    date: '',
                    time: '',
                    slider: [20, 50],
                    textarea: ''
                },
            }
        },
        beforeCreate(){

        },
        created(){


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