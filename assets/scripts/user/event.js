/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:33-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-01T11:22:14-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')


const resetform = () => {
  $('form input').val("")
}

const onSignIn = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.SignIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInfailure)
  resetform()
}

const onSignUp = event => {
  event.preventDefault()
  $('#SignUpModal').modal('toggle')
  console.log(event)
  const data = getFormFields(event.target)
  console.log(data)
  resetform()
  api.SignUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpfailure)
}

const onSignOut = event => {
  event.preventDefault()
  api.SignOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutfailure)
  resetform()
}

const OnChangePassword = event => {
  event.preventDefault()
  $('#ChangePasswordModal').modal('toggle')
  console.log(event)
  const data = getFormFields(event.target)
  console.log(data)
  api.ChangePassword(data)
    .then(ui.OnChangePasswordSuccess)
    .catch(ui.OnChangePasswordfailure)
  resetform()
}

module.exports = {
  onSignIn,
  onSignUp,
  onSignOut,
  OnChangePassword
}
