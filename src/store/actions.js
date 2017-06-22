
const actions = {
  'creat-user' ({commit}, user) {
    commit('UPDATE_USER', user)
  },
  'creat-player' ({commit}, player) {
    // make db action
    commit('CREATE_PLAYER', player)
  }
}
export default actions
