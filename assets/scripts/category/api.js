/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-30T15:55:42-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T21:29:48-05:00
 */
const config = require('../config')
const store = require('../store')

const GetCategories = () => {
  return $.ajax({
    url: config.apiUrl + '/categories',
    method: 'GET'
  })
}

const GetCategory = id => {
  return $.ajax({
    url: config.apiUrl + '/categories/' + id,
    method: 'GET'
  })
}
//
const CreateCategory = data => {
 return $.ajax({
   url: config.apiUrl + '/categories',
   method: 'POST',
   headers: {
     Authorization: 'Token token=' + store.user.token
   },
   data
 })
}
//
const DeleteCategory = id => {
return $.ajax({
url: config.apiUrl + '/categories/' + id,
method: 'DELETE',
headers: {
 Authorization: 'Token token=' + store.user.token
}
})
}

const UpdateCategory = (data, id) => {
  return $.ajax({
    url: config.apiUrl + '/categories/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  GetCategories,
  GetCategory,
  CreateCategory,
  UpdateCategory,
  DeleteCategory
}
