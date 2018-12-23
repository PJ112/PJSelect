import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginCard from '../components/pages/card/LoginCard'
import Library from '../components/pages/library/Library'
import LoginColum from '../components/pages/colum/LoginColum'
import Card from '../components/pages/card/Card'
import Colum from '../components/pages/colum/Colum'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/logincard',
      name: 'LoginCard',
      component: LoginCard
    },
    {
      path: '/library',
      name: 'Library',
      component: Library
    },
    {
      path: '/logincolum',
      name: 'LoginColum',
      component: LoginColum
    },
     {
       path: '/card/:user',
       name: 'Card',
       component: Card
     },
    ,
    {
      path: '/colum/:user',
      name: 'Colum',
      component: Colum
    }
  ]
})
