/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:29-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-01T11:28:02-05:00
 */
const store = require('../store')
const signintemp = require('../templates/auth/signintemp.handlebars')
const showwarntemp = require('../templates/tooltip/warning.handlebars')


const onSignInSuccess = response => {
  store.user = response.user
  console.log(store.user)
  $('#signincard').css('display', 'none')
  $('#signout-button').css('display', 'inline')
  $('#Dashboard').css('display', 'block')
  $('.product-show').css('display', 'none')
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
  $('.product-show').css('display', 'block')
  $('#signout-button').css('display', 'none')
  $('#SignIn').css('display', 'inline')
}

const OnChangePasswordSuccess = () => {
  console.log('Change password success')
}

const onSignInfailure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'Sign In Fail'})).fadeOut(3000)
}
const onSignOutfailure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'Sign Out Fail'})).fadeOut(3000)
}
const onSignUpfailure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'Sign up Fail'})).fadeOut(3000)
}
const OnChangePasswordfailure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'Change Password Fail'})).fadeOut(3000)
}

module.exports = {
  onSignInSuccess,
  onSignOutSuccess,
  onSignUpSuccess,
  OnChangePasswordSuccess,
  onSignInfailure,
  onSignOutfailure,
  onSignUpfailure,
  OnChangePasswordfailure
}
