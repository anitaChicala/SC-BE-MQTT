###############################################################################
# Step 1 : Builder image
#
FROM node:lts-alpine 

COPY . /server/node/app

WORKDIR /server/node/app

# CMD npm install

CMD npm run build
