/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T13:32:16-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-29T16:24:18-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')


const onGetCustomers = event => {
  api.GetCustomers()
    .then(ui.onGetCustomersSuccess)
    .catch(ui.failure)
}

const onCreateCustomers = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.CreateCustomer(data)
    .then(() => onGetCustomers())
    .catch(ui.failure)
}

module.exports = {
  onGetCustomers,
  onCreateCustomers
}
