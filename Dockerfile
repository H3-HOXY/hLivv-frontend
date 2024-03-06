# Dockerfile
FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install && npx webpack
EXPOSE 3000
CMD ["node", "dist/app.js"]

