FROM node:22.12.0-slim

WORKDIR /app

COPY package.json .
COPY prisma ./prisma

RUN apt-get update -y && apt-get install -y openssl

# RUN npm install --production && npx prisma generate --schema=/app/prisma/schema.prisma
RUN npm install --dev && npx prisma generate --schema=/app/prisma/schema.prisma

COPY . .

EXPOSE 3000 

CMD ["npm", "start"]