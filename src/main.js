// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'firebaseui/dist/firebaseui.css'

Vue.use(VueMaterial)

const config = {
  apiKey: 'AIzaSyCdR7N1wNpCX9rm3ITRv5_NFYHIqZItY4Y',
  authDomain: 'drinktogether-44dc2.firebaseapp.com',
  databaseURL: 'https://drinktogether-44dc2.firebaseio.com',
  projectId: 'drinktogether-44dc2',
  storageBucket: 'drinktogether-44dc2.appspot.com',
  messagingSenderId: '1093557434089'
}
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  created () {
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
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
