/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-28T21:32:34-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T22:39:53-05:00
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
  $('#signup').on('submit', userevent.onSignUp)
  $('#changepassword').on('submit',userevent.OnChangePassword)

  // Customer
  $('#Customer').on('click', costomerevents.onGetCustomers)
  $('body').on('submit', '#CreateCustomer', costomerevents.onCreateCustomer)
  $('body').on('click', '.deletecustomer', costomerevents.onDeleteCustomer)
  $('body').on('submit', '.UpdateCustomer', costomerevents.onUpdateCustomer)

  // TOOGLE SIDEBAR
  $('#menu-toggle').click(function (e) {
    e.preventDefault()
    $('#wrapper').toggleClass('toggled')
  })
})
