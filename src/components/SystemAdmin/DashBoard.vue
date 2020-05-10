<template>
  <div class="dashboard">
    <button value="测试" @click="usecookie">fsgggdfsf</button>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      addr:
        "http://" +
        process.env.VUE_APP_CLUSTER_IP +
        ":" +
        process.env.VUE_APP_CLUSTER_DASHBOARD_PORT
    };
  },
  methods: {
    usecookie() {
      this.$axios.get("/api/admin/experiment").then(function(response) {
        if (response.status == 200) {
          console.log(response.data);
        }
      });
    }
  }
};
</script>

<style>
.dashboard {
  padding-top: 61px;
  position: fixed;
  left: 220px;
  height: 500px;
  width: 90%;
  height: 100%;
  background-color: red;
}
.dashboard .content {
  position: fixed;
  left: 220px;
  width: 1600px;
  height: 100%;
  top: 0;
}
</style>
