FROM golang:1.9.7-alpine as builder

WORKDIR /builder

COPY main.go .

RUN go build main.go

FROM scratch

COPY --from=builder /builder/main /main

CMD ["./main"]


