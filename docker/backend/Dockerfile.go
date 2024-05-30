#WIP
FROM golang:1.21 AS build


WORKDIR /app

RUN git clone -b development https://github.com/Niklas-gif/quiz-app-backend.git .

RUN go build -o main .

FROM golang:1.21
COPY --from=build /app/main /app/main
WORKDIR /app
CMD ["./main"]
