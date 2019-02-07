/**
 * @Author: xiaojiezhang
 * @Date:   2019-02-01T14:55:09-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-05T16:30:34-05:00
 */

'use strict'
const phone = (str) => {
  return str.substring(0, 2) + '-****-' + str.substring(-3, -1)
}

module.exports = phone
