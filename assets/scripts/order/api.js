/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-30T12:07:51-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T15:35:31-05:00
 */
const config = require('../config')
const store = require('../store')

const GetOrders = () => {
  return $.ajax({
    url: config.apiUrl + '/orders',
    method: 'GET'
  })
}

const GetOrder = id => {
  return $.ajax({
    url: config.apiUrl + '/orders/' + id,
    method: 'GET'
  })
}

const CreateOrder = data => {
  return $.ajax({
    url: config.apiUrl + '/orders',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const UpdateOrder = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/orders/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const DeleteOrder = id => {
  return $.ajax({
    url: config.apiUrl + '/orders/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  GetOrders,
  GetOrder,
  CreateOrder,
  UpdateOrder,
  DeleteOrder
}
