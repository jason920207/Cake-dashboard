/**
 * @Author: xiaojiezhang
 * @Date:   2019-02-01T14:47:14-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-01T14:55:17-05:00
 */



'use strict'

const password = (str) => {
  return str[0] + '****' + str[str.length - 1]
}



module.exports = password
