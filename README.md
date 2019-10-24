## Description
A repository testing e2e testing in nestjs with typeorm listeners

This nestjs app has a single service called cat-service. It has two paths: GET /cat:name and POST /cat
The database is setup with TypeOrm and it has listener BeforeInsert() that changes the color to "Black"


## Installation

```bash
$ npm install
```

## Running the app

```bash
docker-compose -f docker-compose.dev.yml up
Make post request /cat with {"name": "Ulla", "color": "Red"}
The response should be {"name": "Ulla", "color": "Black"}
```

## Test
This test just sends a post request to /cat with {"name": "Ulla", "color": "Blue"} and expects {"name": "Ulla", "color": "Black"}
```bash
docker-compose -f docker-compose.e2e.yml up --exit-code-from cat-service
```
