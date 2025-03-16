# Etapa de build
FROM node:18 AS build
WORKDIR /app

# Instala dependências
COPY package*.json ./ 
RUN npm install

# Copia o restante do código
COPY . .

# Gera client Prisma e compila TypeScript
RUN npx prisma generate
RUN npm run build

# Etapa de produção
FROM node:18-slim
WORKDIR /app

# Instala libssl1.1 necessário para o Prisma
RUN apt-get update && apt-get install -y libssl1.1

# Copia arquivos da build
COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/package*.json ./

# Executa aplicação
CMD ["node", "dist/server.js"]
