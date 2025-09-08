# Use a base image (e.g., Node.js, Python, Java)
FROM ubuntu:latest

# Set the working directory inside the container
WORKDIR /src

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Docker Deps
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://get.docker.com | sh

# Install Node.js
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Install application dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port your application listens on
EXPOSE 3000

# Define the command to run your application when the container starts
CMD ["npm", "run", "dock:start"]