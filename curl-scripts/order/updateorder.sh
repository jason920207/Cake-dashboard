# @Author: xiaojiezhang
# @Date:   2019-01-29T09:39:16-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-29T09:39:31-05:00
curl "http://localhost:4741/orders/${id}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "order": {
      "customer_id": "'"${c_id}"'",
      "product_id": "'"${p_id}"'",
      "date":"'"${date}"'"
    }
  }'

echo
