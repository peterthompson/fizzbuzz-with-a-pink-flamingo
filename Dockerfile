FROM node:10.15.1-alpine

COPY . .

RUN npm install
RUN npm install pm2 -g

EXPOSE 3000

CMD ["pm2-runtime", "npm", "--", "run", "server"]
