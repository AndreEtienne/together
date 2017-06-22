// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'firebaseui/dist/firebaseui.css'
import store from './store'
Vue.use(VueMaterial)

const config = {
  apiKey: 'AIzaSyC7XS6RakH9jIn5tLpTOKsp1-gJ9oKabYU',
  authDomain: 'together-4387d.firebaseapp.com',
  databaseURL: 'https://together-4387d.firebaseio.com',
  projectId: 'together-4387d',
  storageBucket: 'together-4387d.appspot.com',
  messagingSenderId: '808180080233'
}
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  router,
  created () {
    App.store = store
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        store.dispatch('creat-user', {user: user})
        this.$router.push('/main')
      } else {
        this.$router.push('/login')
      }
    })
  },
  el: '#app',
  template: '<App/>',
  components: { App }
})
