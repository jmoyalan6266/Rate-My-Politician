FROM node:12-stretch
COPY package.json package.json 
RUN npm install --silent
COPY . .
CMD ["npm", "start"]
