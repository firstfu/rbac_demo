FROM node:latest


WORKDIR /app


COPY package*.json ./


RUN npm install -g pnpm

#RUN npm -i -g @nestjs/cli

# RUN npm install --force or --legacy-peer-deps
RUN pnpm install
COPY . .

# Build the project
RUN pnpm run build

# Expose the listening port
EXPOSE 3001

# Run npm start
CMD [ "pnpm", "run", "start:dev" ]