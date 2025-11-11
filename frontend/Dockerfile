# ---- Build stage ----
FROM node:latest AS build
WORKDIR /app

# Only package files first for better caching
COPY package*.json ./
RUN npm ci --legacy-peer-deps

# Copy the rest and build
COPY . .
RUN npm run build

# ---- Runtime stage ----
FROM node:latest AS runtime
WORKDIR /app
RUN npm i -g serve@14

# bring over the built static files
COPY --from=build /app/build ./build

EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
