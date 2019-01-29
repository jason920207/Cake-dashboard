# @Author: xiaojiezhang
# @Date:   2019-01-29T09:42:02-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-29T09:43:52-05:00


curl "http://localhost:4741/customers/${id}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "customer": {
      "email":"'"${email}"'",
      "username":"'"${username}"'",
      "password":"'"${password}"'",
      "phone":"'"${phone}"'"
    }
  }'

echo
