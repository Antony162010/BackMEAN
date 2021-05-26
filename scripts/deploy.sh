#!/bin/bash

if [[ -z "${MONGODB_URI}" ]]; then
    MONGODB_URI="${DATABASE}"
else
    MONGODB_URI="${MONGODB_URI}"
fi

# pm2-runtime /app/ecosystem.config.js