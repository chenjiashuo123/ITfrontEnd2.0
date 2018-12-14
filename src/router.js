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
import OrderDetail from "./components/person/OrderDetail.vue";
import BookStoreDetail from "./components/person/BookStoreDetail.vue";
import ModifyBook from "./components/person/ModifyBook.vue";
import Admin from "@/views/Admin.vue";
import CheckedBook from "@/components/admin/CheckedBook.vue";
import CheckOrder from "@/components/admin/CheckOrder.vue";
import CheckUser from "@/components/admin/CheckUser.vue";
import WaitCheckBook from "@/components/admin/WaitCheckBook.vue";

Vue.use(Router);

const router = new Router({
  routes: [{
      path: "/",
      redirect: "/home"
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
        },
        {
          path: "/bookdetail",
          name: "bookdetail",
          component: BookDetail
        }
      ]
    },
    {
      path: "/person",
      name: "person",
      meta: {
        title: "个人中心",
      },
      component: Person,
      children: [{
          path: "/bookstore",
          name: "bookstore",
          component: BookStore,
        },
        {
          path: "/buybook",
          name: "buybook",
          component: BuyBook
        },
        {
          path: "/personinfo",
          name: "personinfo",
          component: PersonInfo
        },
        {
          path: "/oldbook",
          name: "oldbook",
          component: OldBook
        },
        {
          path: "/newbook",
          name: "newbook",
          component: NewBook
        },
        {
          path: "/salebook",
          name: "salebook",
          component: SaleBook
        },
        {
          path: "/orderdetail",
          name: "orderdetail",
          component: OrderDetail
        },
        {
          path: "/bookstoredetail",
          name: "bookstoredetail",
          component: BookStoreDetail
        },
        {
          path: "/modifybook",
          name: "modifybook",
          component: ModifyBook
        }
      ]
    },
    {
      path: "/admin",
      name: "admin",
      component: Admin,
      children: [{
          path: "/checkedbook",
          name: "checkedbook",
          component: CheckedBook
        },
        {
          path: "/checkuser",
          name: "checkuser",
          component: CheckUser
        },
        {
          path: "/checkorder",
          name: "checkorder",
          component: CheckOrder
        },
        {
          path: "/waitcheckbook",
          name: "waitcheckbook",
          component: WaitCheckBook
        }
      ]
    }
  ]
});
export default router;