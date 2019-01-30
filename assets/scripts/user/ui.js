/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:29-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T22:05:10-05:00
 */
const store = require('../store')


const onSignInSuccess = response => {
  store.user = response.user
  console.log(store.user)

  $('#signincard').css('display', 'none')
  $('#Dashboard').css('display', 'block')
}

const onSignUpSuccess = response => {
  console.log('Sign up success')
}

const onSignOutSuccess = () => {
  store.user = null
  $('#signincard').css('display', 'block')
  $('#Dashboard').css('display', 'none')
}

const OnChangePassword = () => {
  console.log('Change password success')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onSignInSuccess,
  onSignOutSuccess,
  onSignUpSuccess,
  OnChangePassword,
  failure
}
