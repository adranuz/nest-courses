<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>




## Installation
Create the env files `.env`, `.env.prod` and `.env.stage`, and set the variables according to the `.env.example` file.

```bash
$ npm install
```

Make sure you can run the environments by setting the `NODE_ENV` variable to `dev`, `prod` or `stage`.

```bash
NODE_ENV=stage npm run start:dev
NODE_ENV=prod npm run start:dev
npm run start:dev
```

## Running the app by default

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

Nest is [MIT licensed](LICENSE).
