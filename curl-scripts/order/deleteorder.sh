# @Author: xiaojiezhang
# @Date:   2019-01-29T09:39:43-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-29T09:40:04-05:00
curl "http://localhost:4741/orders/${id}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\


echo
