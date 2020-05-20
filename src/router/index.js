//原先的
import Vue from 'vue'
import Router from 'vue-router'
import Header from "../components/Common/Header"
import SideBar from "../components/Common/SideBar"
import CAdvisor from "../components/SystemAdmin/CAdvisor"
import EFK from "../components/SystemAdmin/EFK"
import Settings from "../components/Common/Settings"
import LoginPage from "../components/Common/LoginPage"
import Ping from "../components/Common/ping"
//student


Vue.use(Router)

export default new Router({
    // 设置链接激活时使用的 CSS 类名
    linkActiveClass: "active",
    routes: [
        {
            path: '/ping',
            name: 'Ping',
            component: Ping
        },
        {
            path: '/header',
            name: 'Header',
            component: Header
        },
        {
            path: '/sideBar',
            name: 'SideBar',
            component: SideBar
        },
        {
            path: '/cadvisor',
            name: 'CAdvisor',
            component: CAdvisor
        },
        {
            path: '/efk',
            name: 'EFK',
            component: EFK
        },
        {
            path: '/settings',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
    ]
})
