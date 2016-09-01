import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './modules/App.vue'

import DashboardRoutes from './modules/Dashboard/router/routes'
import UsersRoutes from './modules/Users/router/routes'

const routes = Object.assign(DashboardRoutes, UsersRoutes);

Vue.use(VueRouter)

// 1. Require the module
import VueMaterialComponents from 'vue-material-components'

// 2. Require the Materialize CSS (or import it in your HTML)
//import 'vue-material-components/assets/css/materialize.min.css'

// 3. Install the plugin
Vue.use(VueMaterialComponents)

const router = new VueRouter()

router.map(routes)

router.start(App, '#app')
