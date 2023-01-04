FROM node:19-alpine AS development

ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Install dependencies
COPY package.json .
COPY package-lock.json .

# Install all exact version dependencies or devDependencies from a package-lock
RUN npm ci

# Copy app files
COPY . .

# Start the app
CMD [ "npm", "run", "dev" ]
