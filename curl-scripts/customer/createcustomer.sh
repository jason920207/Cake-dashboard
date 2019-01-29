# @Author: xiaojiezhang
# @Date:   2019-01-29T08:41:52-05:00
# @Last modified by:   xiaojiezhang
# @Last modified time: 2019-01-29T15:29:18-05:00
curl "http://localhost:4741/customers" \
  --include \
  --request POST \
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
