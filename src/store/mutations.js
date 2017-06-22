const mutations = {
  UPDATE_USER (state, {user}) {
    state.user.authenticated = true
    state.user.name = user.displayName
    state.user.photoUrl = user.photoUrl
  },
  CREATE_PLAYER (state, player) {
    state.player.push(player)
  }
  // DELETE_PLAYER (state, player) {
  //   state.player.splice(state.player.indexOf(player), 1)
  // }
}

export default mutations
