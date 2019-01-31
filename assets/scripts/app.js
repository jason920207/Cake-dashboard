/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-28T21:32:34-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-31T13:53:38-05:00
 */



'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userevent = require('./user/event')
const customerevents = require('./customer/events')
const productevents = require('./product/events')
const orderevents = require('./order/events')
const categoryevents = require('./category/events')
const dashboardTemp = require('./templates/dashboard/dashboard.handlebars')
const store = require('./store')
$(() => {
  // your JS code goes here
  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $(function () {
    productevents.ShowProducts()
  })

  $('#signout').on('click', productevents.ShowProducts)



  // User
  $('#signin').on('submit', userevent.onSignIn)
  $('#signout').on('click', userevent.onSignOut)
  $('#signup').on('submit', userevent.onSignUp)
  $('#changepassword').on('submit',userevent.OnChangePassword)

  // Customer
  $('#Customer').on('click', customerevents.onGetCustomers)
  $('body').on('click', '#ShowCustomers', customerevents.onGetCustomers)
  $('body').on('submit', '#getcustomer', customerevents.onGetCustomer)
  $('body').on('submit', '#CreateCustomer', customerevents.onCreateCustomer)
  $('body').on('click', '.deletecustomer', customerevents.onDeleteCustomer)
  $('body').on('submit', '.UpdateCustomer', customerevents.onUpdateCustomer)

  // Product
  $('#Products').on('click', productevents.onGetProducts)
  $('body').on('click', '#ShowProducts', productevents.onGetProducts)
  $('body').on('submit', '#getproduct', productevents.onGetProduct)
  $('body').on('submit', '#CreateProduct', productevents.onCreateProduct)
  $('body').on('submit', '#UpdateProduct', productevents.onUpdateProduct)
  $('body').on('click', '.deleteproduct', productevents.onDeleteProduct)

  // Orders
  $('#Orders').on('click', orderevents.onGetOrders)
  $('body').on('click', '#ShowOrders', orderevents.onGetOrders)
  $('body').on('submit', '#GetOrder', orderevents.onGetOrder)
  $('body').on('submit', '#CreateOrder', orderevents.onCreateOrder)
  $('body').on('submit', '#UpdateOrder', orderevents.onUpdateOrder)
  $('body').on('click', '.deleteorder', orderevents.onDeleteOrder)

  // Category CreateCategory
  $('#Categories').on('click', categoryevents.onGetCategories)
  $('body').on('click', '#ShowCategories', categoryevents.onGetCategories)
  $('body').on('submit', '#GetCategory', categoryevents.onGetCategory)
  $('body').on('submit', '#CreateCategory', categoryevents.onCreateCategory)
  $('body').on('click', '.deletecategory', categoryevents.onDeleteCategory)


  // dashboard
  $('#dashboard').on('click', function () {
    const showDashBoardHtml = dashboardTemp()
    $('#content').html(showDashBoardHtml)
  })

  // //cake-detail
  // $('body').on('click', '#cake-detail', productevents.showproduct)

})
