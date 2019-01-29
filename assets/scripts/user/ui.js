/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T10:15:29-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T11:45:43-05:00
 */
const store = require('../store')


const onSignInSuccess = response => {
  store.user = response.user
  console.log(store.user)
  $('#signincard').css('display', 'none')
  $('#Dashboard').css('display', 'block')
}

const onSignOutSuccess = () => {
  store.user = null
  $('#signincard').css('display', 'block')
  $('#Dashboard').css('display', 'none')
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onSignInSuccess,
  onSignOutSuccess,
  failure
}
