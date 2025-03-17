# Etapa de build
FROM node:18 as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . . 
RUN npm run build

# Etapa de produção com Nginx
FROM nginx:alpine
# Copiar os arquivos de build para o Nginx
COPY --from=build /app/dist /usr/share/nginx/html
# Copiar o arquivo de configuração personalizado para o Nginx
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
