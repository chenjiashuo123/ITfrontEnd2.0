import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Person from "@/views/Person.vue";



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
      component: Person
    },
    {
      path: "/home",
      name: "home",
      component: Home,
      meta: {
        title: '首页',
      }
    }, {
      path: "/login",
      name: "login",
      component: Login
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router
