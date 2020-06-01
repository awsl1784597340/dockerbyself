//原先的
import Vue from 'vue'
import Router from 'vue-router'
import Header from "../components/Common/Header"
import SideBar from "../components/Common/SideBar"
import CAdvisor from "../components/SystemAdmin/CAdvisor"
import Settings from "../components/Common/Settings"
import LoginPage from "../components/Common/LoginPage"
import Ping from "../components/Common/ping"
import Empty from "../components/Common/empty"
//student
import ExperimentList from "../components/Student/ExperimentList";
import GetCourse from "../components/Student/GetCourse";
import GradeList from "../components/Student/GradeList";
//TeacherAndAgssistant
import CourseinfoAssistant from "../components/Teacherandassistant/CourseinfoAssistant";
import CourseinfoTeacher from "../components/Teacherandassistant/CourseinfoTeacher";
import CourseListAssistant from "../components/Teacherandassistant/CourseListAssistant";
import CourseListTeacher from "../components/Teacherandassistant/CourseListTeacher";
import Experimentinfo from "../components/Teacherandassistant/Experimentinfo";
import ManageExperiment from "../components/Teacherandassistant/ManageExperiment";
import UpdateGrade from "../components/Teacherandassistant/UpdateGrade";
//UserAdmin
import ManageCourse from "../components/UserAdmin/ManageCourse"
import AssignTeacher from "../components/UserAdmin/AssignTeacher"
import AssignStudents from "../components/UserAdmin/AssignTeacher"
//SystemAdmin
import GetUser from "../components/SystemAdmin/GetUser";
import ManageContainer from "../components/SystemAdmin/ManageContainer";
import ResourceUsage from "../components/SystemAdmin/ResourceUsage";


Vue.use(Router)

export default new Router({
    // 设置链接激活时使用的 CSS 类名
    linkActiveClass: "active",
    routes: [
        {
            path: '/',
            name:'Empty',
            component: Empty
        },
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
            path: '/settings',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/login',
            name: 'LoginPage',
            component: LoginPage
        },
        //NewAdd
        //Student
        {
            path: '/ExperimentList',
            name:'ExperimentList',
            component: ExperimentList
        },
        {
            path: '/GetCourse',
            name: 'GetCourse',
            component: GetCourse
        },
        {
            path: '/GradeList',
            name:'GradeList',
            component: GradeList
        },
        //TeacherAndAssistant
        {
            path: '/CourseinfoAssistant',
            name:'CourseinfoAssistant',
            component: CourseinfoAssistant
        },
        {
            path: '/CourseinfoTeacher',
            name:'CourseinfoTeacher',
            component: CourseinfoTeacher
        },
        {
            path: '/CourseListAssistant',
            name:'CourseListAssistant',
            component: CourseListAssistant
        },
        {
            path: '/CourseListTeacher',
            name:'CourseListTeacher',
            component: CourseListTeacher
        },
        {
            path: '/Experimentinfo',
            name:'Experimentinfo',
            component: Experimentinfo
        },
        {
            path: '/ManageExperiment',
            name:'ManageExperiment',
            component:ManageExperiment
        },
        {
            path:'/UpdateGrade',
            name:'UpdateGrade',
            component: UpdateGrade
        },
        //UserAdmin
        {
            path:'/ManageCouerse',
            name:'ManageCourse',
            component: ManageCourse
        },
        {
            path:'/AssignTeacher',
            name:'AssignTeacher',
            component: AssignTeacher
        },
        {
            path:'/AssignStudents',
            name:'AssignStudemts',
            component: AssignStudents
        },
        //SystemAdmin
        {
            path:'/GetUser',
            name:'GetUser',
            component: GetUser
        },
        {
            path:'/ManageContainer',
            name: 'ManageContainer',
            component: ManageContainer
        },
        {
            path: '/ResourceUsage',
            name:'ResourceUsage',
            component: ResourceUsage
        }
    ]
})
