<template>
    <div>
        <Row>
            <Col span="24" >

                <div style="" class="">
                    <Form :model="formItem" :label-width="80">
                        <Form-item label="集群名">
                            <Input v-model="formItem.input" placeholder="请输入集群名称"></Input>
                        </Form-item>
                        <Form-item label="描述">
                            <Input v-model="formItem.input" placeholder="请输入描述信息"></Input>
                        </Form-item>
                        <Form-item label="集群注册id">
                            <Input v-model="formItem.input" placeholder="请输入集群注册id，仅记录用"></Input>
                        </Form-item>
                        <Form-item label="机房">
                            <Input v-model="formItem.input" placeholder="请输入机房信息"></Input>
                        </Form-item>
                        <Form-item label="lookup地址">
                            <Input v-model="formItem.input" placeholder="请输入lookup地址"></Input>
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