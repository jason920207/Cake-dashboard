/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:29-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-31T14:17:04-05:00
 */
const store = require('../store')
const signintemp = require('../templates/auth/signintemp.handlebars')


const onSignInSuccess = response => {
  store.user = response.user
  console.log(store.user)
  $('#signincard').css('display', 'none')
  $('#signout-button').css('display', 'inline')
  $('#Dashboard').css('display', 'block')
  $('#shop').css('display', 'none')
  $('#SignIn').css('display', 'none')
  const SignInHtml = signintemp({ user: response.user })
  $('#content').html(SignInHtml)
}

const onSignUpSuccess = response => {
  console.log('Sign up success')
}

const onSignOutSuccess = () => {
  store.user = null
  $('#signincard').css('display', 'block')
  $('#Dashboard').css('display', 'none')
  $('#shop').css('display', 'inline')
  $('#signout-button').css('display', 'none')
  $('#SignIn').css('display', 'inline')
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
