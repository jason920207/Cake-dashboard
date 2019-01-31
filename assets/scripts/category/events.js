/**
 * @Author: xiaojiezhang
 * @Date:   2019-01-30T15:56:20-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2019-01-30T21:29:56-05:00
 */

const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onGetCategories = () => {
  api.GetCategories()
    .then(ui.onGetCategoriesSuccess)
    .catch(ui.failure)
}

const onGetCategory = event => {
  event.preventDefault()
  const id = getFormFields(event.target).id
  console.log(id)
  api.GetCategory(id)
    .then(ui.onGetCategorySuccess)
    .catch(ui.failure)
}

const onCreateCategory = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log(data)
  api.CreateCategory(data)
    .then(() => onGetCategories())
    .catch(ui.failure)
}

const onUpdateCategory = event => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = data.category.id
  console.log(data)
  api.UpdateCategory(data, id)
    .then(() => {
      api.GetCategory(id)
        .then(ui.onGetCategorySuccess)
        .catch(ui.failure)
    })
    .catch(ui.failure())
}

const onDeleteCategory = event => {
  event.preventDefault()
  const id = event.target.dataset.id
  console.log(id)
  api.DeleteCategory(id)
    .then(() => onGetCategories())
    .catch(ui.failure)
}

module.exports = {
  onGetCategories,
  onGetCategory,
  onCreateCategory,
  onUpdateCategory,
  onDeleteCategory
}
