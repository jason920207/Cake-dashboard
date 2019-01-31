/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T16:27:35-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T12:09:25-05:00
 */
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onGetProducts = () => {

  api.GetProducts()
    .then(ui.onGetProductsSuccess)
    .catch(ui.failure)
}

const onGetProduct = event => {
  event.preventDefault()
  const id = getFormFields(event.target).id
  console.log(id)
  api.GetProduct(id)
    .then(ui.onGetProductSuccess)
    .catch(ui.failure)
}

const onCreateProduct = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.CreateProduct(data)
    .then(() => onGetProducts())
    .catch(ui.failure)
}

const onUpdateProduct = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.product.id
  console.log(id)
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
  console.log(id)
  api.DeleteProduct(id)
    .then(() => onGetProducts())
    .catch(ui.failure)
}

module.exports = {
  onGetProducts,
  onGetProduct,
  onCreateProduct,
  onUpdateProduct,
  onDeleteProduct
}
