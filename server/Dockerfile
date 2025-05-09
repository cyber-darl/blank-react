# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose the port your server runs on (change if necessary)
EXPOSE 4001

# Start the application
CMD ["node", "index.js"]  