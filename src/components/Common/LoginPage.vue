/* eslint-disable */
<template>
  <div class="loginPage">
    <div v-if="flag">
      <div class="title">登录</div>
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="用户名" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div v-else>
      <div>
        <el-row type="flex" class="row-bg" justify="center" style="padding-bottom: 30px">
          <h2>请选择登陆身份</h2>
        </el-row>
      </div>
      <div v-if="identity.includes(5)">
        <el-row type="flex" class="row-bg" justify="center">
          <el-button type="primary" @click="toStudent">login as student</el-button>
        </el-row>
      </div>
      <div v-if="identity.includes(4)">
        <el-row type="flex" class="row-bg" justify="center">
          <el-button type="primary" @click="toAssistant">login as assistant</el-button>
        </el-row>
      </div>
      <div v-if="identity.includes(3)">
        <el-row type="flex" class="row-bg" justify="center">
          <el-button type="primary" @click="toTeacher">login as teacher</el-button>
        </el-row>
      </div>
      <div v-if="identity.includes(2)">
        <el-row type="flex" class="row-bg" justify="center">
          <el-button type="primary" @click="toSystemAdmin">login as system admin</el-button>
        </el-row>
      </div>
      <div v-if="identity.includes(1)">
        <el-row type="flex" class="row-bg" justify="center">
          <el-button type="primary" @click="toUserAdmin">login as user admin</el-button>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { setCookie, getCookie } from "../../js/cookieUtil";
export default {
  name: "loginPage",
  data() {
    return {
      ruleForm: {
        name: "",
        password: "",
        identity: "",
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
      identity: [],
      data: "",
      flag: true,
    };
  },
  inject: ["reload"],

  methods: {
    submitForm(formName) {
      let that = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var { name, password, identity } = this.$refs[formName].model;
          var that = this;
          this.$axios
            .post("api/login", {
              email: this.ruleForm.name,
              password: this.ruleForm.password,
            })
            .then(function (response) {
              if (response.status == 200) {
                that.data = response.data.data;
                for (var item in that.data.Roles) {
                  that.identity.push(that.data.Roles[item].ID);
                }
                that.flag = false;
              }
            })
            .catch(function (error) {
              that.$message.error("登录失败，请重试");
              console.log(error);
            });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    toStudent() {
      setCookie("userId", this.data.userId);
      setCookie("identity", "学生");
      window.location.reload();
    },
    toTeacher() {
      setCookie("userId", this.data.userId);
      setCookie("identity", "教师");
      window.location.reload();
    },
    toAssistant() {
      setCookie("userId", this.data.userId);
      setCookie("identity", "学生");
      window.location.reload();
    },
    toUserAdmin() {
      setCookie("userId", this.data.userId);
      setCookie("identity", "用户管理员");
      window.location.reload();
    },
    toSystemAdmin() {
      setCookie("userId", this.data.userId);
      setCookie("identity", "系统管理员");
      window.location.reload();
    },
  },
};
</script>

<style>
.loginPage {
  position: fixed;
  height: 500px;
  width: 600px;
  top: 140px;
  margin-left: 500px;
}

.loginPage .title {
  text-align: center;
  margin-bottom: 30px;
  margin-left: 30px;
  font-size: 20px;
}
</style>
