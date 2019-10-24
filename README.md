## Description
A repository testing e2e testing in nestjs with typeorm listeners

## Installation

```bash
$ npm install
```

## Running the app

```bash
docker-compose -f docker-compose.dev.yml up
```

## Test

```bash
docker-compose -f docker-compose.e2e.yml up --exit-code-from cat-service
```
