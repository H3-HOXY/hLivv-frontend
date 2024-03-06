# Dockerfile
FROM node:18.14.0
RUN mkdir ./build
COPY ./build ./build
RUN npm install serve -g
EXPOSE 3000
#ENTRYPOINT ["serve", "-s", "build", "--listen", "http://localhost:3000"]
#CMD serve -s build
ENTRYPOINT ["serve", "-s", "build"]

