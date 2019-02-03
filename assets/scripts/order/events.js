/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-30T12:07:56-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-03T09:14:45-05:00
 */
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onGetOrders = () => {
  api.GetOrders()
    .then(ui.onGetOrdersSuccess)
    .catch(ui.failure)
}

const onGetOrder = event => {
  event.preventDefault()
  const id = getFormFields(event.target).id
  api.GetOrder(id)
    .then(ui.onGetOrderSuccess)
    .catch(ui.failure)
}

const onCreateOrder = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.CreateOrder(data)
    .then(() => onGetOrders())
    .catch(ui.failure)
}

const onUpdateOrder = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.order.id
  api.UpdateOrder(data, id)
    .then(() => {
      api.GetOrder(id)
        .then(ui.onGetOrderSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure)
}

const onDeleteOrder = event => {
  const id = event.target.dataset.id
  console.log(id)
  api.DeleteOrder(id)
    .then(() => onGetOrders())
    .catch(ui.failure)
}

module.exports = {
  onGetOrders,
  onGetOrder,
  onCreateOrder,
  onUpdateOrder,
  onDeleteOrder
}
