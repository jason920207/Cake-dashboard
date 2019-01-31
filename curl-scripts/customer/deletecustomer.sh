# @Author: xiaojiezhang
# @Date:   2019-01-29T09:43:16-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-30T08:33:04-05:00
curl "http://localhost:4741/customers/${id}" \
  --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\

echo
