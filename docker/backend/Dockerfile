FROM openjdk:17

COPY ms-backend.jar /app/ms-backend.jar 

EXPOSE 8080

WORKDIR /app

ENTRYPOINT [ "java", "-jar", "/app/ms-backend.jar" ]