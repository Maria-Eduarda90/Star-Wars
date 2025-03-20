# Etapa de build
FROM node:18 as build
WORKDIR /app

COPY package*.json ./
COPY .env .env
RUN npm install
COPY . .

# Exporta manualmente a variável durante o build
RUN export $(cat .env | xargs) && npm run build

# Etapa de produção
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
