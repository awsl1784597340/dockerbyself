/* eslint-disable */
<template>
    <div style="margin-left:220px;margin-top:61px">
        <div style="width: 50%">
        <h1>新建课程</h1>
        <el-input v-model="coursename" placeholder="请输入课程名"></el-input>
        <el-button type="primary" plain @click="newcourse">上传</el-button>
        <h1>删除课程</h1>
        <el-input v-model="courseid" placeholder="请输入课程id"></el-input>
        <el-button type="primary" plain @click="deletecourse">删除</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ManageCourse",
        data() {
            return {
                coursename:"",
                courseid:""
            }
        },
        methods:{
            newcourse(){
                let that=this
                this.$axios.post("api/admin/course",{course_name:that.coursename}).then(function (response) {
                    if (response.status===201)
                        alert("success")
                    else alert('bad input')
                })
            },
            deletecourse(){
                let that=this
                this.$axios.get("api/admin/course/"+that.courseid+"/delete")
            }
        }
    }
</script>

<style scoped>

</style>