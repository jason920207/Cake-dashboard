/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-30T12:08:01-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T14:39:35-05:00
 */
const ShowOrders = require('../templates/order/showorders.handlebars')
const ShowOrder = require('../templates/order/showorder.handlebars')


const onGetOrdersSuccess = response => {
  console.log(response)
  const showOrdersHtml = ShowOrders({ orders: response.orders })
  $('#content').html(showOrdersHtml)
}

const onGetOrderSuccess = response => {
  const showOrderHtml = ShowOrder({order: response.order})
  $('#content').html(showOrderHtml)
}

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onGetOrdersSuccess,
  onGetOrderSuccess,
  failure
}
