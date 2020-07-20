/* eslint-disable */
<template>
    <div style="margin-left:220px;margin-top:61px">
        <div style="width: 50%">
            <h1>为课程分配教师</h1>
            <el-input v-model="courseId" placeholder="请输入被分配的课程id"></el-input>
            <el-input v-model="teacherId" placeholder="请输入教师id，若有多个教师请用','分隔"></el-input>
            <el-button type="primary" plain @click="assign">分配</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AssignTeacher",
        data() {
            return {
                courseId:"",
                teacherId:"",
                teacherForm:[]
            }
        },methods:{
            assign(){
                let that=this
                this.teacherForm=this.teacherId.split(",")
                var teacheridd=[]
                for(var i =0;i<this.teacherForm.length;i++){
                    teacheridd.push(parseInt(this.teacherForm[i]))
                }
                this.$axios.post("api/admin/course/"+that.courseId+"/teacher",{teachers:teacheridd}).
                then(function (response) {
                    if (response.status===201)
                        alert("success")
                    else alert('bad input')
                })
            }

        }
    }
</script>

<style scoped>

</style>