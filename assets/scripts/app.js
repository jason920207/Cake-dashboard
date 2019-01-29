/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-28T21:32:34-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T16:11:51-05:00
 */



'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userevent = require('./user/event')
const costomerevents = require('./customer/events')


$(() => {
  // your JS code goes here
  // User
  $('#signin').on('submit', userevent.onSignIn)
  $('#signout').on('click', userevent.onSignOut)

  // Customer
  $('#Customer').on('click', costomerevents.onGetCustomers)
  $('body').on('submit', '#CreateCustomer', costomerevents.onCreateCustomers)



  // TOOGLE SIDEBAR
  $('#menu-toggle').click(function (e) {
    e.preventDefault()
    $('#wrapper').toggleClass('toggled')
  })
})
