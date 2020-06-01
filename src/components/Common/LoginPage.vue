/* eslint-disable */
<template>
  <div class="loginPage">
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
      <el-form-item label="身份" prop="identity">
        <el-radio-group v-model="ruleForm.identity">
          <el-radio label="学生"></el-radio>
          <el-radio label="助教"></el-radio>
          <el-radio label="教师"></el-radio>
          <el-radio label="用户管理员"></el-radio>
          <el-radio label="系统管理员"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
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
        identity: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "change" }
        ],
        identity: [{ required: true, message: "请选择身份", trigger: "change" }]
      }
    };
  },
  inject: ["reload"],

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          var { name, password, identity } = this.$refs[formName].model;
          var that = this;
          if (identity == "学生") {
            this.$axios
              .post("/api/login", {
                email: this.ruleForm.name,
                password: this.ruleForm.password
              })
              .then(function(response) {
                console.log(response);
                if (response.status == 200) {
                  var data = response.data.data;
                  var identityuser = [];
                  for (var item in data.Roles) {
                    identityuser.push(data.Roles[item].ID);
                  }
                  if (identityuser.includes(5)) {
                    setCookie("id", data.userId);
                    setCookie("name", data.name);
                    setCookie("email", data.email);
                    setCookie("phone", data.phone);
                    setCookie("class", data.class);
                    setCookie("studentId", data.studentId);
                    setCookie("userId", data.userId);
                    setCookie("identity", "学生");
                    window.location.reload();
                  } else {
                    alert("请选择正确的身份");
                    this.$axios.get("/api/logout");
                  }
                }
              })
              .catch(function(error) {
                that.$message.error("登录失败，请重试");
                console.log(error);
              });
          } else if (identity == "助教") {
            this.$axios
              .post("/api/login", {
                email: this.ruleForm.name,
                password: this.ruleForm.password
              })
              .then(function(response) {
                if (response.status == 200) {
                  var data = response.data.data;
                  var identityuser = [];
                  for (var item in data.Roles) {
                    identityuser.push(data.Roles[item].ID);
                  }
                  if (identityuser.includes(4)) {
                    setCookie("id", data.userId);
                    setCookie("name", data.name);
                    setCookie("email", data.email);
                    setCookie("phone", data.phone);
                    setCookie("teacherId", data.teacherId);
                    setCookie("userId", data.userId);
                    setCookie("identity", "助教");

                    window.location.reload();
                  } else {
                    alert("请选择正确的身份");
                    this.$axios.get("/api/logout");
                  }
                }
              })
              .catch(function(error) {
                that.$message.error("登录失败，请重试");
                console.log(error);
              });
          } else if (identity == "教师") {
            this.$axios
              .post("/api/login", {
                email: this.ruleForm.name,
                password: this.ruleForm.password
              })
              .then(function(response) {
                if (response.status == 200) {
                  var data = response.data.data;
                  var identityuser = [];
                  for (var item in data.Roles) {
                    identityuser.push(data.Roles[item].ID);
                  }
                  if (identityuser.includes(3)) {
                    setCookie("id", data.userId);
                    setCookie("name", data.name);
                    setCookie("email", data.email);
                    setCookie("phone", data.phone);
                    setCookie("teacherId", data.teacherId);
                    setCookie("userId", data.userId);
                    setCookie("identity", "教师");

                    window.location.reload();
                  } else {
                    alert("请选择正确的身份");
                    this.$axios.get("/api/logout");
                  }
                }
              })
              .catch(function(error) {
                that.$message.error("登录失败，请重试");
                console.log(error);
              });
          } else if (identity == "系统管理员") {
            this.$axios
              .post("/api/login", {
                email: this.ruleForm.name,
                password: this.ruleForm.password
              })
              .then(function(response) {
                if (response.status == 200) {
                  var data = response.data.data;
                  var identityuser = [];
                  for (var item in data.Roles) {
                    identityuser.push(data.Roles[item].ID);
                  }
                  if (identityuser.includes(2)) {
                    setCookie("id", data.userId);
                    setCookie("name", data.name);
                    setCookie("email", data.email);
                    setCookie("phone", data.phone);
                    setCookie("systemAdminId", data.systemAdminId);
                    setCookie("userId", data.userId);
                    setCookie("identity", "系统管理员");
                    //window.location.reload();
                    // window.location.reload();
                    // window.setTimeout(that.back, 2000)
                    window.setTimeout(window.location.reload(),500)
                  } else {
                    alert("请选择正确的身份");
                    this.$axios.get("/api/logout");
                  }
                }
              })
              .catch(function(error) {
                that.$message.error("登录失败，请重试");
                console.log(error);
              });
          } else if (identity == "用户管理员") {
            this.$axios
              .post("/api/login", {
                email: this.ruleForm.name,
                password: this.ruleForm.password
              })
              .then(function(response) {
                if (response.status == 200) {
                  var data = response.data.data;
                  var identityuser = [];
                  for (var item in data.Roles) {
                    identityuser.push(data.Roles[item].ID);
                  }
                  if (identityuser.includes(1)) {
                    setCookie("id", data.userId);
                    setCookie("name", data.name);
                    setCookie("email", data.email);
                    setCookie("phone", data.phone);
                    setCookie("systemAdminId", data.systemAdminId);
                    setCookie("userId", data.userId);
                    setCookie("identity", "用户管理员");

                    window.location.reload();
                  } else {
                    alert("请选择正确的身份");
                    this.$axios.get("/api/logout");
                  }
                }
              })
              .catch(function(error) {
                that.$message.error("登录失败，请重试");
                console.log(error);
              });
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
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
