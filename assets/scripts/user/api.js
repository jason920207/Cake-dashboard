/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:23-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T22:04:11-05:00
 */
const config = require('../config')
const store = require('../store')

const SignIn = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}
const SignUp = data => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data
  })
}
const SignOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const ChangePassword = data => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  SignIn,
  SignUp,
  SignOut,
  ChangePassword
}
