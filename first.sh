#!/bin/bash

# Define the container name or ID
CONTAINER_NAME="cont1"

# Define the file path inside the container
FILE_PATH="/usr/share/nginx/html/index.html"

# Define the content to append
CONTENT="hii iam dev"

# Execute commands inside the container
docker exec "${CONTAINER_NAME}" /bin/bash -c "
    echo '${CONTENT}' >> ${FILE_PATH}
"
