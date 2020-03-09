FROM node:10.15.0-alpine

RUN apk update \
    && apk add --virtual build-dependencies \
        build-base \
        gcc \
        python \
        wget \
        git \
    && apk add \
        bash

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json /app/
RUN npm install

# Copy app source
COPY . .

# Compile app sources
RUN npm run build

# Remove dev dependencies
# RUN npm prune --production

# Expose port and CMD
CMD [ "npm", "start" ]