curl --request GET \
  --url 'https://api.themoviedb.org/3/movie/popular' \
  --header "Authorization: Bearer $access_token" \
  --header 'Content-Type: application/json;charset=utf-8' | jq


curl --request GET \
  --url 'https://api.themoviedb.org/3/discover/movie' \
  --header "Authorization: Bearer $access_token" \
  --header 'Content-Type: application/json;charset=utf-8' | jq


curl --request GET \
  --url 'https://api.themoviedb.org/3/trending/movie/day' \
  --header "Authorization: Bearer $access_token" \
  --header 'Content-Type: application/json;charset=utf-8' | jq
