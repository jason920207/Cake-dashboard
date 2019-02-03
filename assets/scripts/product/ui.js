/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T16:27:21-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-03T13:53:36-05:00
 */
const showProductsTemplate = require('../templates/product/getproductsinfo.handlebars')
const showProductTemplate = require('../templates/product/showcustomerTemplate.handlebars')
const ShowProductsFront = require('../templates/product/ShowProducts.handlebars')
const ShowProducts2Front = require('../templates/product/showproducts2.handlebars')
const showwarntemp = require('../templates/tooltip/warning.handlebars')
const store = require('../store')


const onGetProductsSuccess = response => {
  const showCustomersHtml = showProductsTemplate({products: response.products})
  $('#content').html(showCustomersHtml)
  store.products = response.products
}


const onGetProductSuccess = response => {
  const showCustomerHtml = showProductTemplate({ product: response.product })
  $('#content').html(showCustomerHtml)
}

const onShowProductsSuccess = response => {
  const ShowProductFrontHtml = ShowProductsFront({ products: response.products })
  store.products = response.products
  $('#carousel').html(ShowProductFrontHtml)

  const ProductrowFrontHtml = ShowProducts2Front({ products: store.products })
  $('#product-row').html(ProductrowFrontHtml)
}


const failure = () => {
  $('#warning').fadeIn()
  $('#warning').html(showwarntemp({error: 'error'})).fadeOut(3000)
}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess,
  onShowProductsSuccess,
  failure
}
