<template>
    <div>
        <Row>
            <Col span="24">

                <div style="" class="">
                    <Form :model="cluster" :rules="rules" :label-width="80" ref="cluster">
                        <Form-item label="集群名" prop="cluster_name">
                            <Input v-model="cluster.cluster_name" placeholder="请输入集群名称"></Input>
                        </Form-item>
                        <Form-item label="描述" prop="desc">
                            <Input v-model="cluster.desc" placeholder="请输入描述信息"></Input>
                        </Form-item>
                        <Form-item label="集群注册id" prop="cluster_register_id">
                            <Input v-model="cluster.cluster_register_id" placeholder="请输入集群注册id，仅记录用"></Input>
                        </Form-item>
                        <Form-item label="机房" prop="computer_room">
                            <Input v-model="cluster.computer_room" placeholder="请输入机房信息"></Input>
                        </Form-item>
                        <Form-item label="lookup地址" prop="nsqlookup_addr">
                            <Input v-model="cluster.nsqlookup_addr" placeholder="请输入lookup地址"></Input>
                        </Form-item>
                        <FormItem label="private" prop="private">
                            <RadioGroup v-model="cluster.private">
                                <Radio :label=true>私有</Radio>
                                <Radio :label=false>公开</Radio>
                            </RadioGroup>
                        </FormItem>

                        <Form-item style="float: right;margin-right: 20%">
                            <Button v-on:click="submit('cluster')" type="primary">提交</Button>
                            <Button v-on:click="cancel" type="primary" style="margin-left: 8px">取消</Button>
                        </Form-item>
                    </Form>

                </div>

            </Col>


        </Row>
    </div>
</template>

<style type="text/css" scoped>

    .halfWidth {
        width: 40%;
    }

    .paddingLeft {
        padding-left: 30px;
    }
</style>

<script>
    import {mapState, mapActions} from 'vuex'

    export default {
        data() {
            return {
                cluster: {
                    cluster_name: '',
                    cluster_register_id: '',
                    computer_room: '',
                    nsqlookup_addr: '',
                    user_id: '',
                    private: false,
                    desc: '',
                },
                rules: {
                    cluster_name: [
                        {required: true, message: 'Please fill in the service name', trigger: 'blur'},
                        {
                            type: 'string',
                            max: 30,
                            min: 3,
                            message: 'The length cannot be less than 6 bits,no more than 30 bits',
                            trigger: 'blur'
                        }
                    ],
                    desc: [
                        {required: true, max: 30, message: 'Please fill in the desc name', trigger: 'blur'},
                    ],
                    cluster_register_id: [
                        {required: true, message: 'Please fill in the registerId name', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 5,
                            max: 30,
                            message: 'The length cannot be less than 6 bits,no more than 30 bits',
                            trigger: 'blur'
                        }
                    ],
                    computer_room: [
                        {required: true, message: 'Please fill in the computerRoom name', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 3,
                            max: 30,
                            message: 'The length cannot be less than 6 bits,no more than 30 bits',
                            trigger: 'blur'
                        }
                    ],
                    nsqlookup_addr: [
                        {required: true, message: 'Please fill in the lookup name', trigger: 'blur'},
                        {
                            type: 'string',
                            min: 6,
                            max: 30,
                            message: 'The length cannot be less than 6 bits,no more than 30 bits',
                            trigger: 'blur'
                        }
                    ]
                }
            }
        },

        methods: {
            ...mapActions([
                'AddCluster'
            ]),
            submit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.AddCluster(this.cluster).then(() => {
                            this.loading = false;
                            this.$router.push({path: '/cluster'})
                        }).catch(err => {
                            this.$Message.error(err)
                            this.loading = false;
                        });
                    } else {
                        this.$Message.error('params not right!')
                    }
                })


            },
            cancel() {
                this.$router.push({path: '/cluster'})
            },
        }
    }
</script>