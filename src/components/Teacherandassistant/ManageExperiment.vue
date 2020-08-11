/* eslint-disable */
<template>
    <div style="margin-left:220px;margin-top:61px">
        <h1>管理实验</h1>
        <el-row :gutter="20">
            <el-col :span="9">
                <h3>请选取课程：</h3>
            </el-col>
            <el-col :span="9" style="padding-top: 10px">
                <el-select v-model="value" placeholder="请选择" style="width: 100%">
                    <el-option
                            v-for="(course,index) in courseArr"
                            :key="index"
                            :label="course.course_name"
                            :value="course.ID">
                    </el-option>
                </el-select>
<!--                <el-input v-model="courseId" placeholder="请输入课程号" style="width: 100%"></el-input>-->
            </el-col>
            <el-col :span="4">
                <el-button size="small" type="primary" style="margin-top: 10px" @click="searchExperiment">点击查询</el-button>
            </el-col>
        </el-row>
        <el-table
                :data="experimentData"
                style="width: 100%"
                height="300">
            <el-table-column
                    fixed
                    prop="ID"
                    label="实验号"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="实验名"
                    width="200">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="预习报告模板"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="实验报告模板"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="yaml配置文件"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="实验指导书"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="address"
                    label="实验文档"
                    width="150">
            </el-table-column>
        </el-table>




    </div>

</template>

<script>
    import { setCookie, getCookie } from '../../js/cookieUtil'
    export default {
        name: "ManageExperiment",
        data(){
            return{
                courseId:"",
                courseArr:"",
                value: '',
                experimentData:[],
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }]
            }
        },
        methods:{
            searchExperiment(){
                let that =this
                console.log(that.value)
                let val = that.value
                this.$axios.get('/api/course/' +val+'/experiment').then(function (response) {
                    if(response.status==200){
                        that.experimentData=response.data.data
                        console.log(response.data.data)
                    }
                })
            }

        },
        mounted: function(){
            let that = this
            let identity = this.isLogin
            if (identity == "教师") {
                this.$axios.get('/api/admin/teachercourses')
                    .then(function (response) {
                        if (response.status == 200) {
                            that.courseArr = response.data.data
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
            else {
                this.$axios.get('/api/admin/assistantcourses')
                    .then(function (response) {
                        if (response.status == 200) {
                            that.courseArr = response.data.data
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
    computed: {
        isLogin () {
            console.log("ok")
            let that = this
            that.identity = getCookie("identity");
            that.id = getCookie("id");
            return this.identity;
        }
    }
    }
</script>

<style scoped>

</style>