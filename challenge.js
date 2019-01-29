/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-14T09:01:25-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-14T09:30:02-05:00
 */



'use strict'

const any = function (arr, fun) {
  return arr.some(fun)
}

const none = function (arr, fun) {
  return !arr.some(fun)
}

// Bonuses

const one = function (arr, fun) {
  return arr.filter(fun).length === 1 ? true : false
}

const all = function (arr, fun) {
  return arr.every(fun)
}

// Do not change this.
module.exports = {
  any,
  none,
  one,
  all
}
