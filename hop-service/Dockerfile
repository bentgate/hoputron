# Use Node.js base image
FROM node:22

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire application source code
COPY . .

# Build the NestJS app
RUN npm run build

# Expose the service port
EXPOSE 4000

# Start the NestJS app in production mode
CMD ["npm", "run", "start:prod"]
