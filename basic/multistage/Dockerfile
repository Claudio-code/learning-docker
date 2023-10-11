FROM golang:1.18 AS builder

WORKDIR /app

COPY . .

RUN go mod init hello

RUN go build -o /app/hello

FROM alpine:3.15.9

COPY --from=builder /app/hello /app/hello

ENV APP="hello world"

ARG GIROPOPS="strigus"

RUN echo "giropops: $GIROPOPS"

CMD ["/app/hello"]
