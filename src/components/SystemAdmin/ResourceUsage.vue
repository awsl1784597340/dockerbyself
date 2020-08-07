/* eslint-disable */
<template>
    <div class="dashboard">
        <iframe class="content" :src="addr"></iframe>
    </div>
</template>

<script>
    export default {
        name: "ResourceUsage",
        data() {
            return {
                // addr: "http://" + process.env.VUE_APP_CLUSTER_IP + ":" + process.env.VUE_APP_CLUSTER_EFK_PORT
                addr:"https://127.0.0.1:8081"
            }
        },
    }
</script>

<style scoped>
    .dashboard {
        padding-top: 61px;
        margin-top: 61px;
        position: fixed;
        left: 220px;
        height: 500px;
        width: 90%;
        height: 100%;

    }
    .dashboard .content {
        position: fixed;
        left: 220px;
        width: 85%;
        height: 100%;
        top: 0;
    }
</style>