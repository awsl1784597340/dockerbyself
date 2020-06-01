/* eslint-disable */
<template>
    <div class="courses">

        <div class="courses-wrapper">
            <!--eslint-disable-next-line-->
            <div class="course-item" v-for="(course,index) in courseArr" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../../assets/course.png" class="image">
                    <div style="padding: 14px;">
                        <span>课程名称：{{course.course_name}}</span>
                        <div class="bottom clearfix">
                            <time class="time">{{ course.date }}</time>
                            <el-button type="text" class="button" @click="toExperiment(course)">点击进入课程</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    import { setCookie, getCookie } from '../../js/cookieUtil'
    export default {
        name: "GetCourse",
        data(){
            return {
                courseArr: [],
                identity: "",
            }
        },
        methods:{
            toExperiment(course){
                let that=this
                console.log(course.ID)
                this.$router.push({
                    name:'ExperimentList',
                    params:{id:course.ID}
                })
            }
        },
        mounted: function(){
            let that = this
            let identity = this.isLogin
            if (identity == "学生") {
                this.$axios.get('/api/student/courses')
                    .then(function (response) {
                        if (response.status == 200) {
                            that.courseArr = response.data.data
                            console.log(that.courseArr)
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        },
        computed: {
            isLogin () {
                let that = this
                that.identity = getCookie("identity");
                that.id = getCookie("id");
                return this.identity;
            }
        }}
</script>

<style scoped>
    .courses {
        position: fixed;
        left: 220px;
        height: 100%;
        width: 80%;
    }

    .courses-wrapper {
        display: flex;
        flex-wrap: wrap;
        margin-top: 120px;
    }

    .courses-wrapper .course-item {
        flex: 0 0 25%;
        margin-bottom: 30px;
        margin-left: 30px;
    }

    .courses-wrapper .course-item .poster {
        background-size: 150px 150px;
        width: 150px;
        height: 150px;
        display: inline-block;
        cursor: pointer;
    }

    .courses-wrapper .course-item .content {
        display: inline-block;
        vertical-align: top;
        margin-left: 10px;
        font-size: 14px;
        color: #999;
        cursor: pointer;
    }

    .courses-wrapper .course-item .content .title {
        font-size: 20px;
        width: 200px;
        color: #333;
        margin-bottom: 15px;
        cursor: pointer;
    }


    .courses-wrapper .course-item .bottom {
        margin-top: 13px;
        line-height: 12px;
    }
    .courses-wrapper .course-item .time {
        margin-bottom: 5px;
        font-size: 13px;
        color: #999;
    }

    .courses-wrapper .course-item .button {
        padding: 0;
        float: right;
    }
</style>