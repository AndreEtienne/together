<template>
  <div  class="main">
    <h1>Wellcome :D</h1>
    <md-button class="md-raised" v-on:click.native="logout">logout</md-button>
    <div class="player">
      
    </div>
  </div>
  
</template>
<script>
import firebase from 'firebase'
import {mapState} from 'vuex'
export default {
  name: 'main',
  methods: {
    logout: function () {
      firebase.auth().signOut()
    }
  },
  computed: {
    ...mapState(['player'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.login{
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
}
.login .md-card{
  width: 100%
}
