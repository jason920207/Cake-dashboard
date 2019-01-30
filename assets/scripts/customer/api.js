/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T13:32:03-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T06:22:39-05:00
 */

const config = require('../config')
const store = require('../store')

const GetCustomers = () => {
  return $.ajax({
    url: config.apiUrl + '/customers',
    method: 'GET'
  })
}

const GetCustomer = id => {
  return $.ajax({
    url: config.apiUrl + '/customers/' + id,
    method: 'GET'
  })
}

const CreateCustomer = data => {
  return $.ajax({
    url: config.apiUrl + '/customers',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const DeleteCustomer = id => {
  return $.ajax({
    url: config.apiUrl + '/customers/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const UpdateCustomer = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/customers/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  GetCustomers,
  GetCustomer,
  CreateCustomer,
  DeleteCustomer,
  UpdateCustomer
}
