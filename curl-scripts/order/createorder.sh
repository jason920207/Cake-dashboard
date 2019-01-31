# @Author: xiaojiezhang
# @Date:   2019-01-29T08:31:40-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-30T13:08:51-05:00
#!/bin/bash

curl "http://localhost:4741/orders" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "order": {
      "customer_id": "'"${cid}"'",
      "product_id": "'"${pid}"'",
      "amount":"'"${amount}"'"
    }
  }'

echo
