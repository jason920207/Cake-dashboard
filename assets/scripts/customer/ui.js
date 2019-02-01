/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T13:32:11-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-01T11:40:53-05:00
 */

const showCustomersTemplate = require('../templates/customer/getcustomersinform.handlebars')
const showCustomerTemplate = require('../templates/customer/showcustomerTemplate.handlebars')
const store = require('../store')
const showwarntemp = require('../templates/tooltip/warning.handlebars')

const onGetCustomersSuccess = response => {
  store.customers = response.customers
  const showCustomersHtml = showCustomersTemplate({ customers: response.customers })
  $('#content').html(showCustomersHtml)
}

const onGetCustomerSuccess = response => {
  const showCustomersHtml = showCustomerTemplate({ customer: response.customer })
  $('#content').html(showCustomersHtml)
}

const failure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'error'})).fadeOut(3000)
}

module.exports = {
  onGetCustomersSuccess,
  onGetCustomerSuccess,
  failure
}
