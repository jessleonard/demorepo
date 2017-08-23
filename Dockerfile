FROM node:boron

RUN mkdir /usr/src/app
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json .
RUN mkdir /home/nodeJSApp/
COPY version.txt /home/nodeJSApp/
RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]
