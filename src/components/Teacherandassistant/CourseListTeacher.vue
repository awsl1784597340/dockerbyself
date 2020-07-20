/* eslint-disable */
<template>
    <div class="courses">

        <div class="courses-wrapper">
            <!--eslint-disable-next-line-->
            <div class="course-item" v-for="(course,index) in courseArr" :key="index">
                <el-card :body-style="{ padding: '0px' }">
                    <img src="../../assets/course.png" class="image">
                    <div style="padding: 14px;">
                        <span>课程：{{course.course_name}}</span>
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
        name: "CourseListTeacher",
        data(){
            return {
                courseArr: [],
                identity: "",
            }
        },
        methods:{
            toExperiment(course){
                this.$router.push({
                    name:'CourseinfoTeacher',
                    params:{id:course.ID}
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

</style>



