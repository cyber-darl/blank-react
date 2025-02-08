# Use the official Node.js image as a base
FROM node:16

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app's code
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the backend server will listen on
EXPOSE 4001

# Start the backend server (which will serve the frontend as well)
CMD ["node", "server/index.js"]
