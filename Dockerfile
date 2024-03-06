# Dockerfile
FROM node:14-alpine
WORKDIR /app
COPY . .
RUN npm install && npm install -g webpack@5.x.x webpack-cli && npx webpack
EXPOSE 3000
CMD ["node", "dist/app.js"]

