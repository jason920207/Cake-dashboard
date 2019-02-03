/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T16:27:35-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-03T12:53:11-05:00
 */
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')

const onGetProducts = () => {
  api.GetProducts()
    .then(ui.onGetProductsSuccess)
    .catch(ui.failure)
}

const onGetProduct = event => {
  event.preventDefault()
  const id = getFormFields(event.target).id
  api.GetProduct(id)
    .then(ui.onGetProductSuccess)
    .catch(ui.failure)
}

const onCreateProduct = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.CreateProduct(data)
    .then(() => onGetProducts())
    .catch(ui.failure)
}

const onUpdateProduct = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.product.id
  api.UpdateProduct(data, id)
    .then(() => {
      api.GetProduct(id)
        .then(ui.onGetProductSuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure())
}


const onDeleteProduct = event => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.DeleteProduct(id)
    .then(() => onGetProducts())
    .catch(ui.failure)
}

const ShowProducts = () => {
  api.GetProducts()
    .then(ui.onShowProductsSuccess)
    .catch(ui.failure)
}


module.exports = {
  onGetProducts,
  onGetProduct,
  onCreateProduct,
  onUpdateProduct,
  onDeleteProduct,
  ShowProducts,
}
