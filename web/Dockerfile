# Etapa de build
FROM node:18 as build
WORKDIR /app

# Copia pacotes e .env
COPY package*.json ./
COPY .env .env

RUN npm install
COPY . .

# O Vite já vai usar automaticamente o .env com VITE_ no build
RUN npm run build

# Etapa de produção
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
