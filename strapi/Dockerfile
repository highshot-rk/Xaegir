FROM --platform=linux/amd64 node:16.15.1 AS buildenv
LABEL maintainer="John Knowles <john@xaegir.io>"

ARG BIN
# ARG STRAPI_VERSION
ENV BIN=${BIN}
ENV NODE_ENV=production

# Create a location in the container for the source code.
RUN mkdir -p /builder
WORKDIR /builder

# Copy the module files first and then download the dependencies. If this
# doesn't change, we won't need to do this again in future builds.
COPY cmd/web/"$BIN"/package.json cmd/web/"$BIN"/yarn.lock /builder/

RUN yarn install --production=true  --immutable --immutable-cache --check-cache  --verbose 
##

COPY cmd/web/"$BIN" ./
# COPY . .
RUN yarn build

EXPOSE 1337
CMD ["yarn", "start"]

FROM --platform=linux/amd64  node:14-bullseye-slim
ENV NODE_ENV=production
ENV PATH /node_modules/.bin:$PATH
ENV STRAPI_LOG_LEVEL=debug

WORKDIR /app

# RUN apk update && apk add -y --no-cache libc6-compat libvips libvips-dev
# RUN apk update && apk add -y --no-cache 
# RUN apk update && apk add -y --no-cache libc6-compat build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev  

# COPY --from=buildenv /builder/package.json /builder/yarn.lock ./
COPY --from=buildenv /builder ./

# RUN yarn global add @strapi/strapi
# RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

EXPOSE 1337
CMD ["yarn", "start"]
# CMD ["serve", "build", "-s", "-l", "tcp://xaegir.local:1337"]


# ------------

# FROM --platform=linux/amd64 node:14-bullseye-slim AS buildenv
# LABEL maintainer="John Knowles <john@xaegir.io>"

# ARG BIN
# # ARG STRAPI_VERSION
# ENV BIN=${BIN}
# ENV NODE_ENV=production
# ENV PATH /node_modules/.bin:$PATH
# ENV STRAPI_LOG_LEVEL=debug

# # Create a location in the container for the source code.
# RUN mkdir -p /builder
# WORKDIR /builder

# # Copy the module files first and then download the dependencies. If this
# # doesn't change, we won't need to do this again in future builds.
# COPY cmd/web/"$BIN"/package.json cmd/web/"$BIN"/yarn.lock /builder/

# RUN yarn install --production=true  --frozen-lockfile  --verbose 
# ##

# COPY cmd/web/"$BIN" ./
# # COPY . .
# RUN yarn build

# EXPOSE 1337
# CMD ["yarn", "start"]

# # FROM --platform=linux/amd64  node:14-bullseye-slim
# # ENV NODE_ENV=production
# # ENV PATH /node_modules/.bin:$PATH
# # ENV STRAPI_LOG_LEVEL=debug

# # WORKDIR /app

# # # RUN apk update && apk add -y --no-cache libc6-compat libvips libvips-dev
# # # RUN apk update && apk add -y --no-cache 
# # # RUN apk update && apk add -y --no-cache libc6-compat build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev  

# # # COPY --from=buildenv /builder/package.json /builder/yarn.lock ./
# # COPY --from=buildenv /builder ./

# # RUN yarn global add @strapi/strapi
# # # RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

# # EXPOSE 1337
# # CMD ["yarn", "start"]
# # # CMD ["serve", "build", "-s", "-l", "tcp://xaegir.local:1337"]


# ------------

# FROM --platform=linux/amd64 node:14-bullseye-slim AS buildenv
# LABEL maintainer="John Knowles <john@xaegir.io>"

# ARG BIN
# # ARG STRAPI_VERSION
# ENV BIN=${BIN}
# ENV NODE_ENV=production

# # Create a location in the container for the source code.
# RUN mkdir -p /builder
# WORKDIR /builder

# # Copy the module files first and then download the dependencies. If this
# # doesn't change, we won't need to do this again in future builds.
# COPY cmd/web/"$BIN"/package.json cmd/web/"$BIN"/yarn.lock /builder/

# RUN yarn install --production=true  --frozen-lockfile  --verbose 
# ##

# COPY cmd/web/"$BIN" ./
# # COPY . .
# RUN yarn build

# FROM --platform=linux/amd64  node:14-bullseye-slim
# ENV NODE_ENV=production
# ENV PATH /node_modules/.bin:$PATH
# ENV STRAPI_LOG_LEVEL=debug

# WORKDIR /app

# # RUN apk update && apk add -y --no-cache libc6-compat libvips libvips-dev
# # RUN apk update && apk add -y --no-cache 
# # RUN apk update && apk add -y --no-cache libc6-compat build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev  

# # COPY --from=buildenv /builder/package.json /builder/yarn.lock ./
# COPY --from=buildenv /builder ./

# RUN yarn global add @strapi/strapi
# # RUN yarn global add @strapi/strapi@${STRAPI_VERSION}

# EXPOSE 1337
# CMD ["yarn", "start"]
# # CMD ["serve", "build", "-s", "-l", "tcp://xaegir.local:1337"]
