# DEMO MESSAGE BROKER USING NODEJS AND RABBITMQ

## Description

This demo is learning by doing from article ([rabbitmq-mengembangkan-aplikasi-berbasis-pesan](https://ichi.pro/id/rabbitmq-mengembangkan-aplikasi-berbasis-pesan-181831798707785)).

## Installation

```sh
# Clone this project from github
git clone git@github.com:saptarga/demo-nodejs-rabbitmq.git

# Install npm dependencies in project folder
npm install
```

## Run Server

Run Order Service

```sh
cd order-service/

node index
```

Run Restaurant Service

```sh
cd restaurant-service/

node index
```

## Make Requests

Register Order

```sh
POST /api/orders HTTP/1.1
Host: localhost:3000
Content-Type: application/json
Content-Length: 144

{
    "items" : [
        {
            "name": "burger",
            "quantity": 1
        },
        {
            "name": "coke",
            "quantity": 5
        }
    ],
    "email": "saptarga@gmail.com"
}
```

Get Status Order

```sh
GET /api/orders/6112e91e07c2366aa4e8648b HTTP/1.1
Host: localhost:3000
```
