/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T13:32:11-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T14:29:30-05:00
 */

const showCustomersTemplate = require('../templates/customer/getcustomersinform.handlebars')

const onGetCustomersSuccess = response => {
  console.log(response.customers)
  const showCustomersHtml = showCustomersTemplate({ customers: response.customers })
  $('#content').html(showCustomersHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onGetCustomersSuccess,
  failure
}
