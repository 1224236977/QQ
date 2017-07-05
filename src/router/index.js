import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home/Home'
import Tel from '../pages/Home/Tel'
import Dynamic from '../pages/Dynamic/Dynamic'
import Contacts from '../pages/Contacts/Contacts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Tel',
      name: 'Tel',
      component: Tel
    },
    {
      path: '/Dynamic',
      name: 'Dynamic',
      component: Dynamic
    },
    {
      path: '/Contacts',
      name: 'Contacts',
      component: Contacts
    }
  ]
})
