####
# This Dockerfile is used in order to build a container that runs the country app web client.
#
# Build the image with:
#
# docker build -f Dockerfile -t country-app-frontend .
#
# Then run the container using:
#
# docker run -i --rm --env COUNTRY_SERVICE_URL="http://url-to-country:8080" [... more envs] -p 80:80 country-app-frontend
#
###
# create new image from base node js image
FROM node:12 as builder
# set the workdir
WORKDIR /usr/src/app
# copy project files into workdir
COPY . .
# install dependencies
RUN npm install
# build the productive angular application
RUN npm run build-prod
# use nginx as web server
FROM nginx:alpine
# Copy the built files from the builder
COPY --from=builder /usr/src/app/dist/country-app/. /usr/share/nginx/html 
# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]