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
                        <!--<Form-item label="秘钥">
                            <Input v-model="formItem.input" placeholder="请输入描述信息"></Input>
                        </Form-item>-->

                        <Form-item label="topic类型">
                            <Select v-model="model1" style="width:200px">
                                <Option v-for="(item,index) in cityList" :value="item.value" :key="index">{{ item.label }}</Option>
                            </Select>
                            <Select style="width: 40%" placeholder="请选择类型">
                                <Option value="1" id="1">hello</Option>

                            </Select>
                            <Select style="width: 40%"  v-model="formItem.select" placeholder="请选择集群">
                                <Option value="beijing">北京市</Option>
                                <Option value="shanghai">上海市</Option>
                                <Option value="shenzhen">深圳市</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="分区数">
                            <Select v-model="formItem.select" placeholder="请选择，无特殊需求建议1">
                                <Option value="beijing">北京市</Option>
                                <Option value="shanghai">上海市</Option>
                                <Option value="shenzhen">深圳市</Option>
                            </Select>
                            <Select v-model="formItem.select" placeholder="请选择，无特殊需求建议2">
                                <Option value="beijing">北京市</Option>
                                <Option value="shanghai">上海市</Option>
                                <Option value="shenzhen">深圳市</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="副本数">

                        </Form-item>
                        <Form-item label="集群">

                        </Form-item>
                        <Form-item label="已消费数据留存天数">
                            <Input v-model="formItem.input" placeholder="请输入，建议7天，最大15天"></Input>
                        </Form-item>


                        <Form-item>
                            <Button type="primary">提交</Button>
                            <Button type="ghost" style="margin-left: 8px">取消</Button>
                        </Form-item>
                    </Form>

                </div>

            </Col>



        </Row>
    </div>
</template>

<style type="text/css" scoped>


</style>

<script>
    import Cookies from 'js-cookie';
    import { mapState, mapActions } from 'vuex'
    import 'iview/dist/styles/iview.css';

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
                cityList: [
                    {
                        value: 'New York',
                        label: 'New York'
                    },
                    {
                        value: 'London',
                        label: 'London'
                    },
                    {
                        value: 'Sydney',
                        label: 'Sydney'
                    },
                    {
                        value: 'Ottawa',
                        label: 'Ottawa'
                    },
                    {
                        value: 'Paris',
                        label: 'Paris'
                    },
                    {
                        value: 'Canberra',
                        label: 'Canberra'
                    }
                ],
                model1: ''
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