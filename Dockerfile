# Build runtime image
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY /dist/apps/frontend/ .

# expose port 80
EXPOSE 80
