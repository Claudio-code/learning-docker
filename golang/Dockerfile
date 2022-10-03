FROM golang:1.9.7-alpine as builder

WORKDIR /builder

COPY main.go .

RUN go build main.go

FROM alpine:3.16.2

COPY --from=builder /builder/main /main

CMD ["./main"]


