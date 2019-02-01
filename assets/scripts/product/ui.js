/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T16:27:21-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-01T11:41:41-05:00
 */
const showProductsTemplate = require('../templates/product/getproductsinfo.handlebars')
const showProductTemplate = require('../templates/product/showcustomerTemplate.handlebars')
const ShowProductsFront = require('../templates/product/ShowProducts.handlebars')
const showwarntemp = require('../templates/tooltip/warning.handlebars')


const onGetProductsSuccess = response => {
  const showCustomersHtml = showProductsTemplate({ products: response.products })
  $('#content').html(showCustomersHtml)
}


const onGetProductSuccess = response => {
  const showCustomerHtml = showProductTemplate({ product: response.product })
  $('#content').html(showCustomerHtml)
}

const onShowProductsSuccess = response => {
  const ShowProductFrontHtml = ShowProductsFront({ products: response.products })
  $('#shop').html(ShowProductFrontHtml)
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
