import Api from '@/services/Api'

export default {
  fetchGoods () {
    return Api().get('goods')
  },
  fetchOneGoods (id) {
    return Api().get(`goods/${id}`)
  },
  updateOneGoods (id, quantity) {
    return Api().post(`goods/${id}`, {quantity})
  }
}
