FROM node:14-slim

WORKDIR /user/src/app 
COPY ./package.json ./

# RUN rm ./yarn.lock
RUN rm -rf node_modules
RUN yarn cache clean
RUN yarn add d3
RUN yarn install 

COPY ./yarn.lock ./
# RUN yarn add d3


COPY . .

EXPOSE 3000

CMD ["yarn", "run", "start"]