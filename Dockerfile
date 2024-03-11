
FROM node:14

WORKDIR /

COPY . .
RUN npm install -g typescript
RUN npm install
RUN npm run build


EXPOSE 3000

CMD ["node", "dist/app.js"]
