FROM node:10

# Create app directory
WORKDIR /usr/src/app/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

RUN pwd
RUN ls -l .

RUN rm -Rf config
RUN ls -l 

COPY config/ /config

RUN ls -l /


EXPOSE 3000
CMD [ "node", "src/app.js" ]