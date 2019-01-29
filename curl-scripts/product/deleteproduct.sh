# @Author: xiaojiezhang
# @Date:   2019-01-29T09:33:31-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-29T09:34:34-05:00



curl "http://localhost:4741/products/${id}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\


echo
