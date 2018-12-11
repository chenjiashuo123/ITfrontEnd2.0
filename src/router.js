import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Person from "@/views/Person.vue";
import Register from "@/views/register.vue";
import PersonInfo from "@/components/PersonInfo.vue";
import BookStore from "@/components/BookStore.vue";
import BuyBook from "@/components/BuyBook.vue";
import SaleBook from "@/components/SaleBook.vue";
import HomeBody from "@/components/HomeBody.vue";
import OldBook from "@/components/OldBook.vue";
import NewBook from "@/components/NewBook.vue";




Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: "/person",
      name: "person",
      meta: {
        title: '个人中心',
      },
      component: Person,
      children: [
        {
          path: '/bookstore',
          name: 'bookstore',
          component: BookStore
        },
        {
          path: '/buybook',
          name: 'buybook',
          component: BuyBook
        },
        {
          path: '/personinfo',
          name: 'personinfo',
          component: PersonInfo
        }, {
          path: '/oldbook',
          name: 'oldbook',
          component: OldBook
        }, {
          path: '/newbook',
          name: 'newbook',
          component: NewBook
        },
        {
          path: '/salebook',
          name: 'salebook',
          component: SaleBook
        },
      ]
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: '首页',
      },
      children: [
        {
          path: '/homebody',
          name: 'homebody',
          component: HomeBody
        }
      ]
    }, {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    }
  ]
});


export default router
