<template>
  <div v-if="" class="login">
    <div>
      <md-layout md-align="center">
        <md-layout  md-flex-small="100" md-flex="20">
          <md-card>
            <md-card-content>
              <h1>Welcome</h1>
              <div id="firebaseui-auth-container"></div>
            </md-card-content>
          </md-card>
        </md-layout>
      </md-layout>
    </div>
  </div>
</template>
<script>
import firebase from 'firebase'
import firebaseui from 'firebaseui'
export default {
  name: 'login',
  mounted () {
    let uiConfig = {
      signInSuccessUrl: 'http://localhost:8080/#/main',
      signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start('#firebaseui-auth-container', uiConfig)
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

</style>
