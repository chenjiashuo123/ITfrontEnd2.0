import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Person from "@/views/Person.vue";
import Register from "@/views/Register.vue";
import PersonInfo from "@/components/person/PersonInfo.vue";
import BookStore from "@/components/person/BookStore.vue";
import BuyBook from "@/components/person/BuyBook.vue";
import SaleBook from "@/components/person/SaleBook.vue";
import OldBook from "@/components/person/OldBook.vue";
import NewBook from "@/components/person/NewBook.vue";
import HomeMain from "./components/home/HomeMain.vue";
import BookDetail from "./components/home/BookDetail.vue";
Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: "首页"
      },
      children: [{
        path: "/homemain",
        name: "homemain",
        component: HomeMain
      }, {
        path: "/bookdetail",
        name: "bookdetail",
        component: BookDetail
      }]
    },
    {
      path: "/person",
      name: "person",
      meta: {
        title: "个人中心",
      },
      component: Person,
      children: [{
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
    }
  ]
});


export default router;
