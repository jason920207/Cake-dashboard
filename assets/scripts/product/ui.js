/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T16:27:21-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-02-01T11:24:20-05:00
 */
const showProductsTemplate = require('../templates/product/getproductsinfo.handlebars')
const showProductTemplate = require('../templates/product/showcustomerTemplate.handlebars')
const ShowProductsFront = require('../templates/product/ShowProducts.handlebars')


const onGetProductsSuccess = response => {
  console.log(response)
  const showCustomersHtml = showProductsTemplate({ products: response.products })
  $('#content').html(showCustomersHtml)
}


const onGetProductSuccess = response => {
  console.log(response)
  const showCustomerHtml = showProductTemplate({ product: response.product })
  $('#content').html(showCustomerHtml)
}

const onShowProductsSuccess = response => {
  const ShowProductFrontHtml = ShowProductsFront({ products: response.products })
  $('#shop').html(ShowProductFrontHtml)
}


const failure = (error) => {
  console.error(error)
  $('#warning').html()
}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess,
  onShowProductsSuccess,
  failure
}
