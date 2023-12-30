### Starting the app

- Navigate to docker-compose dir

- If you are using MacOS with Apple chip
```shell
docker compose -f docker-compose-arm64.yaml up -d
```

If you are using Windows/Linux
```shell
docker compose -f docker-compose-amd64.yaml up -d
```

- The app is configured to listen on port 8080
