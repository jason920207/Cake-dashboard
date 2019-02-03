/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-30T12:08:01-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-03T14:05:50-05:00
 */
const ShowOrders = require('../templates/order/showorders.handlebars')
const ShowOrder = require('../templates/order/showorder.handlebars')
const showwarntemp = require('../templates/tooltip/warning.handlebars')
const store = require('../store')

const onGetOrdersSuccess = response => {
  $('#content').html('')
  const showOrdersHtml = ShowOrders({ orders: response.orders })
  $('#content').html(showOrdersHtml)
}

const onGetOrderSuccess = response => {
  const showOrderHtml = ShowOrder({order: response.order})
  $('#content').html(showOrderHtml)
}

const failure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'error'})).fadeOut(3000)
}

module.exports = {
  onGetOrdersSuccess,
  onGetOrderSuccess,
  failure
}
