import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Sex from '@/components/Sex'
import Start from '@/components/start'
import Symptom from  '@/components/symptom'
import Disease from  '@/components/Disease'

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
      path: '/:sex',
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
      ]
    }

  ]
})
