<template>
  <div class="ping">连接状态：{{pingpoint}}</div>
</template>

<script>
export default {
  name: "ping",
  data() {
    return {
      pingpoint: "未连接"
    };
  },
  created() {
    this.ping();
  },
  methods: {
    ping() {
      this.$axios.get("api/ping").then(res => {
        if (res.data.success === true) this.pingpoint = "连接状态良好";
      });
    }
  }
};
</script>

<style>
.ping {
  position: fixed;
  left: 220px;
  height: 500px;
  width: 90%;
  height: 100%;
  padding-top: 100px;
  /*background-color: red;*/
}
.ping .content {
  position: fixed;
  left: 220px;
  width: 1600px;
  height: 100%;
  top: 60px;
}
</style>
