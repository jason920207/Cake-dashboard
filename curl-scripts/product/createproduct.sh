# @Author: xiaojiezhang
# @Date:   2019-01-29T09:09:24-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-30T10:22:05-05:00
curl "http://localhost:4741/products" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "product": {
      "name":"'"${name}"'",
      "description":"'"${des}"'",
      "picture":"'"${pic}"'",
      "price":"'"${price}"'",
      "allergen":"'"${allergen}"'",
      "category_id":"'"${category_id}"'"
    }
  }'

echo
