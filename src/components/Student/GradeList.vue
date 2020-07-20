/* eslint-disable */
<template>
    <div style="margin-left:220px;margin-top:61px;width: 50%">
        <h1>课程成绩</h1>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="CourseID"
                label="课程号"
                width="200">
        </el-table-column>
        <el-table-column
                prop="StudentID"
                label="学号"
                width="200">
        </el-table-column>
        <el-table-column
                prop="grade"
                label="成绩"
                width="200">
        </el-table-column>
    </el-table>
        <h1>实验成绩</h1>
        <el-table
                :data="tableData1"
                style="width: 100%">
            <el-table-column
                    prop="CourseID"
                    label="课程号"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="StudentID"
                    label="学号"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="grade"
                    label="成绩"
                    width="200">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import { setCookie, getCookie } from '../../js/cookieUtil'
    export default {
        name: "GradeList",
        data(){
            return{
                tableData:[],
                tableData1:[]
            }
        },mounted:function (){
            let that = this
            let identity = this.isLogin
            if (identity === "学生") {
                this.$axios.get('api/student/courses/grades')
                    .then(function (response) {
                        if (response.status === 200) {
                            that.tableData = response.data.data
                            console.log(that.tableData)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);t
                    });
                //下面注释了因为暂时实验部分没有数据无法进行操作
                // this.$axios.get('api/student/experiments/grades')
                //     .then(function (response) {
                //         if (response.status === 200) {
                //             that.tableData = response.data.data
                //             console.log(that.tableData)
                //         }
                //     })
                //     .catch(function (error) {
                //         console.log(error);t
                //     });
            }
        },
        computed: {
            isLogin () {
                let that = this
                that.identity = getCookie("identity");
                return this.identity;
            },
        }
    }
</script>

<style scoped>

</style>