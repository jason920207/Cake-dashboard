/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-28T21:32:34-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T16:28:00-05:00
 */



'use strict'

let apiUrl
const apiUrls = {
  production: 'https://damp-citadel-88663.herokuapp.com',
  development: 'http://localhost:4741'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
