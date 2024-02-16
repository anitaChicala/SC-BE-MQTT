###############################################################################
# Step 1 : Builder image
#
FROM node:lts-alpine 

COPY . /server/node/app

WORKDIR /server/node/app

RUN npm install && \
    npm cache clean --force

# CMD npm install
RUN npm run build

CMD npm run start
