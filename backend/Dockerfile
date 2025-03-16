# Etapa de build
FROM node:18-bullseye AS build
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

COPY .env .env

RUN npx prisma generate
RUN npm run build

# Etapa de produção
FROM node:18-bullseye-slim
WORKDIR /app

RUN apt-get update && apt-get install -y libssl1.1

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

CMD ["node", "dist/server.js"]
