import Api from '@/services/Api'

export default {
  fetchUsers () {
    return Api().get('users')
  },
  fetchOneUser (id) {
    return Api().get(`users/${id}`)
  }
}
