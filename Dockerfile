# Etapa 1: build del proyecto Angular
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Etapa 2: servir la app Angular con NGINX
FROM nginx:alpine

# Copiamos el build generado (Angular standalone usa /browser)
COPY --from=build /app/dist/macacos-store/browser /usr/share/nginx/html

# Exponemos el puerto por defecto
EXPOSE 80

# Comando por defecto para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
