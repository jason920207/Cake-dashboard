/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-29T16:27:21-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T15:30:05-05:00
 */
const showProductsTemplate = require('../templates/product/getproductsinfo.handlebars')
const showProductTemplate = require('../templates/product/showcustomerTemplate.handlebars')

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

const failure = (error) => {
  console.error(error)
}

module.exports = {
  onGetProductsSuccess,
  onGetProductSuccess,
  failure
}
