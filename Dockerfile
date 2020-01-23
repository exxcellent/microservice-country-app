####
# This Dockerfile is used in order to build a container that runs the country app web client.
#
# Build the image with:
#
# docker build -f Dockerfile -t country-app-frontend .
#
# Then run the container using:
#
# docker run -i --rm -p 8484:8484 country-app-frontend
#
###
# create new image from base node js image
FROM node:12
# set the workdir
WORKDIR /usr/src/app
# copy project files into workdir
COPY . .
# install dependencies
RUN npm install
# build the productive angular application
RUN npm run build-prod
# install http server
RUN npm install -g http-server
# create a new directory
RUN mkdir -p /usr/src/app/web
# copy angular application source files
RUN cp -a /usr/src/app/dist/country-app/. /usr/src/app/web
# set a new workdir
WORKDIR /usr/src/app/web
# open port 8484
EXPOSE 8484
# start http server without caching
CMD ["http-server", "/usr/src/app/web", "-c-1", "-p8484"]