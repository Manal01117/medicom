# Use the official Node.js image as the base image
FROM node:19.9.0-alpine 

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY ["package.json", "package-lock.json", "./"] 

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 5000
EXPOSE 5000

# Start the backend server
CMD ["node", "index.js"]