import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import RoomView from '../views/RoomView.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
    props: true
  },
  {
    path: '/room/:roomId',
    name: 'room',
    component: RoomView,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
