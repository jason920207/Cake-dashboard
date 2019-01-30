/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T13:32:16-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T22:56:03-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')


const onGetCustomers = event => {
  api.GetCustomers()
    .then(ui.onGetCustomersSuccess)
    .catch(ui.failure)
}

const onCreateCustomer = event => {
  event.preventDefault()
  $('#exampleModal').modal('hide')
  const data = getFormFields(event.target)
  console.log(data)
  api.CreateCustomer(data)
    .then(() => onGetCustomers())
    .catch(ui.failure)
}

const onDeleteCustomer = event => {
  event.preventDefault()

  const id = event.target.dataset.id
  api.DeleteCustomer(id)
    .then(() => onGetCustomers())
    .catch(ui.failure)
}

const onUpdateCustomer = evenet => {
  event.preventDefault()
  const id = $(event.target).closest('section').data("id")
  console.log(id)
}


module.exports = {
  onGetCustomers,
  onCreateCustomer,
  onDeleteCustomer,
  onUpdateCustomer
}
