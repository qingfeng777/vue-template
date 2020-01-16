<template>
    <div>
        <Row>
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

                        <Form-item label="类型及集群选择">
                            <Select class="halfWidth" v-model="formItem.topicType" placeholder="请选择类型">
                                <Option value="1">无序</Option>
                                <Option value="1">分区内有序</Option>
                                <Option value="1">全局有序</Option>
                                <Option value="1">无序带拓展</Option>
                                <Option value="1">分区内有序带拓展</Option>
                mi                <Option value="1">全局有序带拓展</Option>
                            </Select>
                            <Select class="halfWidth paddingLeft"  v-model="formItem.select" placeholder="请选择集群">
                                <Option value="beijing">北京市</Option>
                                <Option value="shanghai">上海市</Option>
                                <Option value="shenzhen">深圳市</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="队列设置">
                            <Select class="halfWidth" v-model="formItem.select" placeholder="请选择分区数，无特殊需求建议1">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                                <Option value="6">6</Option>
                                <Option value="7">7</Option>
                                <Option value="8">8</Option>
                                <Option value="9">9</Option>
                                <Option value="10">10</Option>
                            </Select>
                            <Select class="halfWidth paddingLeft" v-model="formItem.select" placeholder="请选择副本数，无特殊需求建议2">
                                <Option value="1">1</Option>
                                <Option value="2">2</Option>
                                <Option value="3">3</Option>
                                <Option value="4">4</Option>
                                <Option value="5">5</Option>
                            </Select>
                            <br>
                            <Input style="margin-top: 15px;width: 85%;" v-model="formItem.input" placeholder="请输入已消费消息留存天数，建议7天，最大15天"></Input>
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
</template>

<style type="text/css" scoped>

    .halfWidth{
        width: 40%;
    }
    .paddingLeft{
        padding-left: 30px;
    }

</style>

<script>
    import Cookies from 'js-cookie';
    import { mapState, mapActions } from 'vuex'

    export default {
        data () {
            return {
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
                this.$router.push({path: '/'})
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