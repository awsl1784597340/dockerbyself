/* eslint-disable */
<template>
    <div style="margin-left:400px;margin-top:101px">
        <el-row :gutter="70" >
            <el-col :span="11">
                <h1>管理实验</h1>
                <el-row :gutter="20">
                    <el-col :span="9">
                        <h3>实验所属课程号：</h3>
                    </el-col>
                    <el-col :span="11" style="padding-top: 10px">

                        <el-input v-model="courseId" placeholder="请输入课程号" style="width: 100%"></el-input>
                    </el-col>
                </el-row>
                <el-row :gutter="70" style="padding-top: 20px">
                    <el-col :span="9">
                        <h3>上传实验文件：</h3>
                    </el-col>

                    <el-col :span="11">
                        <el-upload
                                class="upload"
                                action=""
                                :multiple="false"
                                :show-file-list="false"
                                accept=""
                                :http-request="httpRequest"
                                style="padding-top: 10px">
                            <el-button size="small" type="primary" plain>点击上传文件</el-button>
                            <div slot="tip" class="el-upload__tip">请上传dockerfile</div>
                        </el-upload>
                    </el-col>

                </el-row>

                <el-row type="flex" class="row-bg" justify="center" style="padding-top: 40px">
                    <el-col :span="10"><el-button type="primary" plain @click="assign" >确认上传</el-button></el-col>
                </el-row>

            </el-col>
            <el-col :span="11">
            </el-col>
        </el-row>
    </div>

</template>

<script>
    export default {
        name: "ManageExperiment",
        data(){
            return{
                courseId:""
            }
        }
    }
</script>

<style scoped>

</style>