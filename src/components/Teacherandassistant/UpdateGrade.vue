/* eslint-disable */
<template>
    <div style="margin-left:220px;margin-top:61px">
        <h1>上传成绩</h1>
        <div style="width: 50%">
        <h2>实验号</h2>
        <el-input v-model="eno" placeholder="请输入实验号"></el-input>
        <h2>学生学号</h2>
        <el-input v-model="sno" placeholder="请输入学生学号"></el-input>
        <h2>实验成绩</h2>
        <el-input v-model="grade" placeholder="请输入实验成绩"></el-input>
            <el-button type="primary" plain @click="submit">主要按钮</el-button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "UpdateGrade",
        data() {
            return {
                eno: '',
                grade:'',
                sno:''
            }
        },methods:{
            submit(){
                let that=this
                this.$axios.post('api/admin/experiment/grade',{
                    grade:
                        {"experiment":that.eno,"grade":that.grade,"student":that.sno}
                }).then(function (response) {
                    if (response.status=200)
                        alert("success")
                    else alert('bad input')
                })
            }
        }
    }
</script>

<style scoped>

</style>