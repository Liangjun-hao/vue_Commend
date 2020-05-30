import Vue from 'vue'
import VueRouter from 'vue-router'
import Commendhome from "../components/Commendhome";
import Commendmap from "../components/Commendmap";
import Home from "../components/Home";
import Welcome from "../components/Welcome";
import Commendshop from "../components/Commendshop";
import Commendindex from "../components/Commendindex";
import search from "../components/search";
Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: Home
    },
    {
      path: '/search',
      name: 'search',
      component: search

    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      redirect: '/welcome',
      children: [
        {
          path: '/welcome',
          name: 'Welcome',
          component: Welcome

        },
        {
          path: '/commendhome',
          name: 'Commendhome',
          component: Commendhome
        },
        {
          path: '/commendmap',
          name: 'Commendmap',
          component: Commendmap
        },
        {
          path: '/commendindex',
          name: 'Commendindex',
          component: Commendindex
        },
        {
          path: '/commendshop',
          name: 'Commendshop',
          component: Commendshop
        },
      ]
    }

]

const router = new VueRouter({
  routes
})

export default router
