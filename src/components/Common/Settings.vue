/* eslint-disable */
<template>
    <div class="settings">
        <div class="title">修改密码</div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="请输入密码">
                <el-input v-model="form.NewPassword1"></el-input>
            </el-form-item>
            <el-form-item label="请再次输入">
                <el-input v-model="form.NewPassword2"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">更新信息</el-button>
                <el-button @click="back">取消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    import { setCookie, getCookie } from '../../js/cookieUtil'
    export default {
        name: 'settings',
        data() {
            return {
                form: {
                    id: '',
                    name: '',
                    studentId: '',
                    teacherId: '',
                    class: '',
                    email: '',
                    phone: '',
                    NewPassword1:"",
                    NewPassword2:"",
                    flag:false,
                },
                identity: ""
            }
        },
        mounted () {
            this.identity = getCookie("identity");
            if (this.identity == "教师") {
                this.form.id = getCookie("id");
                this.form.name = getCookie("name");
                this.form.email = getCookie("email");
                this.form.phone = getCookie("phone");
                this.form.teacherId = getCookie("teacherId");
            } else if (this.identity == "学生") {
                this.form.id = getCookie("id");
                this.form.name = getCookie("name");
                this.form.email = getCookie("email");
                this.form.phone = getCookie("phone");
                this.form.class = getCookie("class");
                this.form.studentId = getCookie("studentId");
            } else if (this.identity == "用户管理员") {
                this.form.id = getCookie("id");
                this.form.name = getCookie("name");
                this.form.email = getCookie("email");
                this.form.phone = getCookie("phone");
            } else if (this.identity == "系统管理员") {
                this.form.id = getCookie("id");
                this.form.name = getCookie("name");
                this.form.email = getCookie("email");
                this.form.phone = getCookie("phone");
            }
        },
        methods: {
            onSubmit: function () {
                if (this.form.NewPassword1 === this.form.NewPassword2) {
                    let that = this
                    console.log(that.form.NewPassword1)
                    let formdata=this.$qs.stringify({'pwd': that.form.NewPassword1})
                    this.$axios({
                        method: 'post',
                        url: 'api/password',
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                        },
                        data: formdata,  // 直接提交转换后的数据即可
                    }).then(function (response) {
                    if (response.status === 201) {
                        alert('success')
                        console.log(response.data)
                        window.setTimeout(that.back, 2000)
                    } else {
                        alert('there is something wrong , please try it later')
                    }
                })

                    //     this.$axios.post("api/password",
                    //     {
                    //         pwd: that.form.NewPassword1
                    //     }).then(function (response) {
                    //     if (response.status === 201) {
                    //         alert('success')
                    //         console.log(response.data)
                    //         window.setTimeout(that.back, 2000)
                    //     } else {
                    //         alert('there is something wrong , please try it later')
                    //     }
                    // })
                } else {
                    alert('两次密码输入不一致')
                }
            },
            back() {
                this.$router.push({
                    name: "Empty",
                });
            }
        }
    }
</script>

<style>
    .settings {
        position: fixed;
        height: 500px;
        width: 500px;
        top: 140px;
        margin-left: 700px;
    }

    .settings .title {
        text-align: center;
        margin-bottom: 30px;
        margin-left: 30px;
        font-size: 20px;
    }
</style>
