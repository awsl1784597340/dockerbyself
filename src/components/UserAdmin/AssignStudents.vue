/* eslint-disable */
<template>
    <div style="margin-left:220px;margin-top:61px">
        <el-row :gutter="70" >
            <el-col :span="11">
            <h1>为课程分配学生</h1>
            <el-row :gutter="20">
                <el-col :span="8">
                    <h3>课程号：</h3>
                </el-col>
                <el-col :span="12" style="padding-top: 10px">

                <el-input v-model="courseId" placeholder="请输入课程号" style="width: 100%"></el-input>
                </el-col>
                </el-row>
                <el-row :gutter="70" style="padding-top: 20px">
                    <el-col :span="9">
                        <h3>学生信息：</h3>
                    </el-col>

                    <el-col :span="11">
                <el-upload
                class="upload"
                action=""
                :multiple="false"
                :show-file-list="false"
                accept="csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                :http-request="httpRequest"
                style="padding-top: 10px">
            <el-button size="small" type="primary" plain>点击上传文件</el-button>
                    <div slot="tip" class="el-upload__tip">支持.xls .xlsx文件，具体格式见右侧</div>
        </el-upload>
                </el-col>

            </el-row>

                <el-row type="flex" class="row-bg" justify="center" style="padding-top: 40px">
                    <el-col :span="10"><el-button type="primary" plain @click="assign" >确认分配</el-button></el-col>
                </el-row>
                <h2>学生信息表</h2>
        <br />
        <!-- 列表 -->
        <el-table
                :data="tableData"
                border
                style="width: 100%">
            <el-table-column
                    prop="ID"
                    label="学号"
                    width="220">
            </el-table-column>
            <el-table-column
                    prop="name"
                    label="姓名">
            </el-table-column>
        </el-table>
                </el-col>
                <el-col :span="11">
                    <h3 style="padding-top: 110px">下图为示例格式</h3>
                    <img src="../../assets/demo.png" style="width: 80%">
                </el-col>
        </el-row>
        </div>

</template>

<script>
    import XLSX from 'xlsx'
    export default {
        name: "AssignStudents",
        data() {
            return {
                courseId: "",
                snoForm: [],
                tableData: []
            }
        }, methods: {
            assign() {
                let that = this
                var snoo = []
                for (var i = 0; i < this.tableData.length; i++) {
                    snoo.push(parseInt(this.tableData.ID))
                }
                this.$axios.post("api/admin/course/" + that.courseId + "/students", {students: snoo}).then(function (response) {
                    if (response.status === 201)
                        alert("success")
                    else alert('bad input')
                })
            },httpRequest (e) {
                let file = e.file // 文件信息
                console.log('e: ', e)
                console.log('file: ', e.file)

                if (!file) {
                    // 没有文件
                    return false
                } else if (!/\.(xls|xlsx)$/.test(file.name.toLowerCase())) {
                    // 格式根据自己需求定义
                    this.$message.error('上传格式不正确，请上传xls或者xlsx格式')
                    return false
                }

                const fileReader = new FileReader()
                fileReader.onload = (ev) => {
                    try {
                        const data = ev.target.result
                        const workbook = XLSX.read(data, {
                            type: 'binary' // 以字符编码的方式解析
                        })
                        const exlname = workbook.SheetNames[0] // 取第一张表
                        const exl = XLSX.utils.sheet_to_json(workbook.Sheets[exlname]) // 生成json表格内容
                        console.log(exl)
                        // 将 JSON 数据挂到 data 里
                        this.tableData = exl
                        // document.getElementsByName('file')[0].value = '' // 根据自己需求，可重置上传value为空，允许重复上传同一文件
                    } catch (e) {
                        console.log('出错了：：')
                        return false
                    }
                }
                fileReader.readAsBinaryString(file)
            }

        }
    }
</script>

<style scoped>

</style>