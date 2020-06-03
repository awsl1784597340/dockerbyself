/* eslint-disable */
<template>
    <div style="margin-left:220px;margin-top:61px">
        <h1>分配助教</h1>
    <h1>学生列表</h1>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop="ID"
                label="序号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="SNo"
                label="学号"
                width="180">
        </el-table-column>
        <el-table-column
                prop="User.Name"
                label="姓名"
                width="180">
        </el-table-column>
        <el-table-column
                prop="CNo"
                label="班级"
                width="180">
        </el-table-column>
        <el-table-column
                prop="User.Email"
                label="邮箱"
                width="180">
        </el-table-column>
        <el-table-column
                prop="User.isonline"
                label="是否在线"
                width="180">
        </el-table-column>
    </el-table>
    </div>
</template>

<script>
    import { setCookie, getCookie } from '../../js/cookieUtil'
    export default {
        name: "CourseinfoTeacher",
        data(){
            return{
                tableData:[{id:6,SNo:777}]
            }
        },mounted:function (){
            let that = this
            let identity = this.isLogin
            let id = this.$route.params.id
            console.log(id)
            if (identity === "教师") {
                this.$axios.get('api/admin/course/'+id+'/student')
                    .then(function (response) {
                        if (response.status === 200) {
                            that.tableData = response.data.data
                            var x
                            for (x in that.tableData)
                            {
                                if(that.tableData[x].User.Onlline===true)
                                    that.tableData[x].User.isonline="在线"
                                else that.tableData[x].User.isonline="离线"
                            }
                            console.log(that.tableData)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);t
                    });
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