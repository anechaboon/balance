# เลือก base image ที่เหมาะสม (เช่น Node.js)
FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# ตั้งค่า directory ที่จะใช้ในการทำงานภายใน container
WORKDIR /app

# คัดลอก package.json และ package-lock.json เข้าไปใน container
COPY package*.json ./

# ติดตั้ง dependencies ด้วย npm
RUN npm install

# คัดลอกโค้ดของแอปพลิเคชันเข้าไปใน container
COPY . .

# build app for production with minification
RUN npm run build

EXPOSE 8080

CMD [ "http-server", "dist" ]
