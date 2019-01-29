/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:23-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T11:44:12-05:00
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

const SignOut = () => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  SignIn,
  SignOut
}
