import Home from './views/Home.vue'
import Processes from './views/Processes.vue'
import Process from './views/Process.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' } 
  },
  {
    path: '/processes',
    name: 'Processes',
    meta: { title: 'Processes' },
    component: Processes,
    // example of route level code-splitting
    // this generates a separate chunk (Processes.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Processes.vue')
  },
  {
    path: '/processes/:id',
    name: 'Process',
    meta: { title: 'Process' },
    component: Process,
    // example of route level code-splitting
    // this generates a separate chunk (Process.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('./views/Process.vue')
  },
  { path: '/:path(.*)', component: NotFound },
]