#!/usr/bin/env bash

echo "var files = [" > app/models/list.js

for filename in public/moe/*; do
  echo "'$(basename "$filename")'," >> app/models/list.js
done

echo "];" >> app/models/list.js
echo "export default files;" >> app/models/list.js
