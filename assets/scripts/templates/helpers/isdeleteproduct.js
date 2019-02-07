/**
 * @Author: xiaojiezhang
 * @Date:   2019-02-05T16:06:57-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-05T16:47:37-05:00
 */
'use strict'
const store = require('../../store')

const isdelete = (str) => {
  console.log(store)
  if (str === store.user.email) {
    return true
  } else {
    return false
  }
}

module.exports = isdelete
