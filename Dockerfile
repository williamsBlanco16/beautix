FROM node:18.15.0-alpine as builder 

ARG maintainer="Beautix team"
ARG description="e-commerce built with React"
ARG APP_PORT=3000
ENV NODE_ENV="development"

LABEL "maintainer" = $maintainer
LABEL "description" = $description
LABEL "enviroment" = $NODE_ENV

WORKDIR /app 

COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build:"${NODE_ENV}"

FROM nginx:stable-alpine

COPY docker-config/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]
EXPOSE ${APP_PORT}


COPY --from=builder /app/dist /usr/share/nginx/html
