# @Author: xiaojiezhang
# @Date:   2019-01-30T19:30:27-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-30T20:31:44-05:00
curl "http://localhost:4741/categories/${id}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data '{
    "category": {
      "name":"'"${name}"'"
    }
  }'

echo
