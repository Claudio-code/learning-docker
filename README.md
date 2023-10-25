<h3 align="center">
  :whale2: About project
</h3>


## Dockerfile Glossary

**ADD**: Command used in Dockerfile to copy files and folders to container.

**CMD**: Command used in Dockerfile to specify default command to execute when start container.

**COPY**: Command used in Dockerfile to copy files and folders to container.

**ENTRYPOINT**: Command used in Dockerfile to specify default command to execute when start container, but can't be replaced when start container.

**ENV**: Command used in Dockerfile to define environment variables what will be in container build and running.

**EXPOSE**: Command used in Dockerfile to define port that the container will execute allowed communication with another containers or with host.

**FROM**: Command used in Dockerfile to specify base image that will be used to build container.

**LABEL**: Command used in Dockerfile to add metadata in image, like information of author and descriptions.

**MAINTAINER**: Command used in Dockerfile to specify author of image.

**RUN**: Command used in Dockerfile to execute commands during container build.

**USER**: Command used in Dockerfile to specify user that will be used to execute commands in container.

**VOLUME**: Command used in Dockerfile to define volume mount point, allowed data share between host and container.

**WORKDIR**: Command used in Dockerfile do define work directory in container, where command will be executed.

---

## Timeline: build docker image

1. **Create Dockerfile**: First pass in build docker image is create Dockerfile. It file contain necessary instructions to build image, with base choice, dependency installation and environment configuration.

2. **Build image**: After create Dockerfile is necessary execute command `docker build` to start build image process. At that time docker will read Dockerfile and compile image according to specify in file.

3. **Tag image**: After finish build is possible add tags in image to facility identification and versioning. Example can add tag indicating application version or destiny environment.
