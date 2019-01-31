/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-30T15:55:47-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T16:45:41-05:00
 */
const showCategoriesTemplate = require('../templates/category/showcategories.handlebars')
const showCategoryTemplate = require('../templates/category/showcategory.handlebars')

const onGetCategoriesSuccess = response => {
  console.log(response.categories)
  const showCategoriesHtml = showCategoriesTemplate({ categories: response.categories })
  $('#content').html(showCategoriesHtml)
}

const onGetCategorySuccess = response => {
  console.log(response.category)
  const showCategoryHtml = showCategoryTemplate({ category: response.category })
  $('#content').html(showCategoryHtml)
}

const failure = (error) => {
  console.error(error)
}
module.exports = {
  onGetCategoriesSuccess,
  onGetCategorySuccess,
  failure
}
