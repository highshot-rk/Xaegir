FROM node:14.17.0 AS buildenv
LABEL maintainer="John Knowles <john@xaegir.io>"

ARG BIN
ENV BIN=${BIN}
# ENV NODE_ENV=production

# Create a location in the container for the source code.
RUN mkdir -p /builder
WORKDIR /builder

# Add node-prune to the container and clean up excess
# RUN apk add --no-cache curl git && cd /tmp && \
#     curl -#L https://github.com/tj/node-prune/releases/download/v1.0.1/node-prune_1.0.1_linux_amd64.tar.gz | tar -xvzf- && \
#     mv -v node-prune /usr/local/bin && rm -rvf * && \
#     echo "yarn cache clean && node-prune" > /usr/local/bin/node-clean && chmod +x /usr/local/bin/node-clean

# Copy the module files first to /app directory and then download the dependencies. If this
# doesn't change, we won't need to do this again in future builds.
COPY cmd/web/"$BIN"/package.json cmd/web/"$BIN"/yarn.lock /builder/

RUN yarn install --immutable --immutable-cache --check-cache --non-interactive

COPY cmd/web/"$BIN" ./

# Apparently, server-side code is relying on third-party libraries stored in the node modules. They are not bundled. --standalone fixes this.
RUN yarn build --non-interactive --standalone 
# Add && node-clean to above RUN command and uncomment RUN apk command to clean up node_modules after build.

FROM node:14.17.0-alpine
# Build time: 241s
WORKDIR /app
ENV PATH /node_modules/.bin:$PATH
ENV PM2_VERSION=5.2.0
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3000
# ENV NODE_ENV=production

RUN yarn global add "pm2@${PM2_VERSION}" && pm2 update

# COPY the contents of builder files to ./app/
COPY --from=buildenv /builder/.nuxt .nuxt/
COPY --from=buildenv /builder/nuxt.config.ts ./
COPY --from=buildenv /builder/ecosystem.config.js ./
COPY --from=buildenv /builder/static static/
COPY --from=buildenv /builder/.output .output/

CMD ["pm2-runtime", "start", "ecosystem.config.js"]
# ENTRYPOINT ["npx", "nuxt-start"]

# FROM node:14.17.0-alpine
# # NOTE: Using single run statement instead of multi-stage builds means 
# # reduced docker layers, but at the expense of yarn install not being cached anymore
# # However, this is only relevant if you have caching enabled on CI agent
# # Build Time: 
# LABEL maintainer="John Knowles <john@xaegir.io>"
# ARG BIN
# ENV BIN=${BIN}
# ENV NODE_ENV=production
# ENV PATH /node_modules/.bin:$PATH
# ENV NUXT_VERSION=2.15.8

# WORKDIR /app
# COPY cmd/web/"$BIN" /app/
# RUN yarn
# RUN yarn build --standalone
# RUN rm -rf node_modules
# RUN rm package.json
# RUN yarn global add "nuxt-start@${NUXT_VERSION}"
# RUN yarn cache clean
# # RUN : \
# #     && yarn install \
# #     && yarn build --standalone \
# #     && rm -rf node_modules \
# #     && rm package.json \
# #     && yarn global add "nuxt-start@${NUXT_VERSION}" \
# #     && yarn cache clean \
# #     && :
# CMD ["npx", "nuxt-start"]
