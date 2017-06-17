<template>
  <div  class="main">
    <h1>Wellcome :D</h1>
      <md-button class="md-raised" v-on:click.native="logout">logout</md-button>
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  name: 'main',
  data () {
    return {
      photo: '',
      userId: '',
      name: '',
      email: '',
      user: {}
    }
  },
  mounted () {
    this.user = firebase.auth().currentUser
    if (this.user) {
      this.name = this.user.displayName
      this.email = this.user.email
      this.photo = this.user.photoURL
      this.userId = this.user.uid
    }
  },
  methods: {
    logout: function () {
      firebase.auth().signOut()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.login .md-card{
  width: 100%
}
