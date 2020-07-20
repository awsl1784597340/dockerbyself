/* eslint-disable */
<template>
    <div style="margin-left:220px;margin-top:61px">
        <div style="width: 50%">
            <h1>为课程分配学生</h1>
            <el-input v-model="courseId" placeholder="请输入被分配的课程id"></el-input>
            <el-input v-model="sno" placeholder="请输入学生学号，若有多个学生请用','分隔"></el-input>
            <el-button type="primary" plain @click="assign">分配</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AssignStudents",
        data() {
            return {
                courseId:"",
                sno:"",
                snoForm:[]
            }
        },methods:{
            assign(){
                let that=this
                this.snoForm=this.sno.split(",")
                var snoo=[]
                for(var i =0;i<this.snoForm.length;i++){
                    snoo.push(parseInt(this.snoForm[i]))
                }
                this.$axios.post("api/admin/course/"+that.courseId+"/students",{students:snoo}).
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