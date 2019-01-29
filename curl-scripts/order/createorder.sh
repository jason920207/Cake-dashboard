# @Author: xiaojiezhang
# @Date:   2019-01-29T08:31:40-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-29T08:40:31-05:00
#!/bin/bash

curl "http://localhost:4741/orders" \
  --include \
  --request POST \
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
