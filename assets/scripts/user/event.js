/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:33-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T12:14:44-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onSignIn = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.SignIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.failure)
}

const onSignOut = (event) => {
  event.preventDefault()
  api.SignOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.failure)
}

module.exports = {
  onSignIn,
  onSignOut
}
