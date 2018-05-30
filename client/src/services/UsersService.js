import Api from '@/services/Api'

export default {
  fetchUsers () {
    return Api().get('users')
  },
  fetchOneUser (id) {
    console.log(id)

    return Api().get('users/' + id)
  }
}
