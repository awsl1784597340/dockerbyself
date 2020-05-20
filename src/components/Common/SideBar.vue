<template>
  <div class="sidebar">
    <el-row class="tac" v-show="identity!='未登录'">
      <el-col :span="12">
        <h5>自定义颜色</h5>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1" @click="GetCourse" v-show="identity=='学生'">
            <i class="el-icon-menu"></i>
            <span slot="title">课程列表</span>
          </el-menu-item>
          <el-menu-item index="2" @click="GradeList" v-show="identity=='学生'">
            <i class="el-icon-menu"></i>
            <span slot="title">查看分数</span>
          </el-menu-item>
          <el-menu-item index="3" @click="ping" v-show="identity=='学生'">
            <i class="el-icon-menu"></i>
            <span slot="title">ping</span>
          </el-menu-item>

          <el-menu-item index="1" @click="CourseListAssistant" v-show="identity=='助教'">
            <i class="el-icon-document"></i>
            <span slot="title">管理课程</span>
          </el-menu-item>
          <el-menu-item index="2" @click="ManageExperiment" v-show="identity=='助教'">
            <i class="el-icon-setting"></i>
            <span slot="title">管理实验</span>
          </el-menu-item>
          <el-menu-item index="3" @click="UpdateGrade" v-show="identity=='教师'">
            <i class="el-icon-setting"></i>
            <span slot="title">管理实验</span>
          </el-menu-item>
          <el-menu-item index="4" @click="ping" v-show="identity=='助教'">
            <i class="el-icon-menu"></i>
            <span slot="title">ping</span>
          </el-menu-item>

          <el-menu-item index="1" @click="CourseListTeacher" v-show="identity=='教师'">
            <i class="el-icon-document"></i>
            <span slot="title">管理课程</span>
          </el-menu-item>
          <el-menu-item index="2" @click="ManageExperiment" v-show="identity=='教师'">
            <i class="el-icon-setting"></i>
            <span slot="title">管理实验</span>
          </el-menu-item>
          <el-menu-item index="3" @click="UpdateGrade" v-show="identity=='教师'">
            <i class="el-icon-setting"></i>
            <span slot="title">管理实验</span>
          </el-menu-item>
          <el-menu-item index="4" @click="ping" v-show="identity=='教师'">
            <i class="el-icon-menu"></i>
            <span slot="title">ping</span>
          </el-menu-item>

          <el-menu-item index="1" @click="ResourceUsage" v-show="identity=='系统管理员'">
            <i class="el-icon-setting"></i>
            <span slot="title">资源使用情况</span>
          </el-menu-item>
          <el-menu-item index="2" @click="GetUser" v-show="identity=='系统管理员'">
            <i class="el-icon-setting"></i>
            <span slot="title">用户在线情况</span>
          </el-menu-item>
          <el-menu-item index="3" @click="ManageContainer" v-show="identity=='系统管理员'">
            <i class="el-icon-setting"></i>
            <span slot="title">容器开启情况</span>
          </el-menu-item>
          <el-menu-item index="4" @click="ping" v-show="identity=='系统管理员'">
            <i class="el-icon-menu"></i>
            <span slot="title">ping</span>
          </el-menu-item>

          <el-menu-item index="1" @click="ManageCourse" v-show="identity=='用户管理员'">
            <i class="el-icon-setting"></i>
            <span slot="title">课程管理</span>
          </el-menu-item>
          <el-menu-item index="2" @click="ping" v-show="identity=='用户管理员'">
            <i class="el-icon-menu"></i>
            <span slot="title">ping</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { setCookie, getCookie } from "../../js/cookieUtil";
export default {
  name: "sidebar",
  data() {
    return {
      identity: ""
    };
  },
  mounted() {
    var identity = this.isLogin;
    if (identity == undefined || identity == "") {
      // this.$router.replace('/login');
      this.identity = "未登录";
    } else if (identity == "学生") {
      this.identity = "学生";
    } else if (identity == "助教") {
      this.identity = "助教";
    } else if (identity == "教师") {
      this.identity = "教师";
    } else if (identity == "系统管理员") {
      this.identity = "系统管理员";
    } else if (identity == "用户管理员") {
      this.identity = "用户管理员";
    }
  },
  computed: {
    isLogin() {
      var that=this
      that.identity = getCookie("identity");
      return this.identity;
    }
  },
  methods: {
    ping() {
      this.$router.push({
        name: "Ping"
      });
    },
    //NewAdd
    //Student
    GetCourse(){
      this.$router.push({
        name: "GetCourse"
      });
    },
    GradeList(){
      this.$router.push({
        name: "GradeList"
      });
    },
    //SystemAdmin
    GetUser(){
      this.$router.push({
        name: "GetUser"
      });
    },
    ManageContainer(){
      this.$router.push({
        name: "ManageContainer"
      });
    },
    ResourceUsage(){
      this.$router.push({
        name: "ResourceUsage"
      });
    },
    //TeacherAndAssistant
    CourseListAssistant(){
      this.$router.push({
        name: "CourseListAssistant"
      });
    },
    CourseListTeacher(){
      this.$router.push({
        name: "CourseListTeacher"
      });
    },
    ManageExperiment(){
      this.$router.push({
        name: "ManageExperiment"
      });
    },
    UpdateGrade(){
      this.$router.push({
        name: "UpdateGrade"
      });
    },
    //UserAdmin
    ManageCourse(){
      this.$router.push({
        name: "ManageCourse"
      });
    }
  }
};
</script>

<style>
.sidebar {
  width: 220px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: #545c64;
}
.sidebar .tac .el-col {
  width: 220px;
}
</style>
