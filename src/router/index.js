import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sex from '@/components/Sex'
import Start from '@/components/start'
import Symptom from  '@/components/symptom'
import Disease from  '@/components/Disease'
import Onset from '@/components/Onset'
import Illtosym from '@/components/illtosym'
import Synway from '@/components/synWay'
import Assist from '@/components/assist'
import Probably from '@/components/Probably'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/sex',
      component: Sex
    },
    {
      path: '/start',
      component: Start,
      children:[
        {
          path:"/symptom",
          component: Symptom
        },
        {
          path:"/disease",
          component: Disease
        }
      ],
      redirect:'/symptom'
    },
    {
      path:"/onset/:key",
      name: 'onset',
      component: Onset
    },
    {
      path: "/illtosym/:key",
      name: "illtosym",
      component: Illtosym
    },
    {
      path: "/synway/:key",
      name: "synway",
      component: Synway      
    },
    {
      path: "/assist",
      name: "assist",
      component: Assist
    },
    {
      path: "/probably",
      name: "probably",
      component: Probably
    }
  ]
})
