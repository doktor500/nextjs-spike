## Getting Started

Setup an API Key to be able to fetch movies from [themoviedb.org](https://www.themoviedb.org/)

- Create a new account on [themoviedb.org/signup](https://www.themoviedb.org/signup)
- Go to settings [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
- Create two files (one will be used when running the app and the other one will be used when running the tests)
    ```bash
        touch .env.local
        touch .env.test.local
    ```
- Add the API Key to both files, so that they look like
    ```bash
        MOVIE_DB_API_KEY=...
    ```

Run the development server:

```bash
yarn dev --turbo
```

Run the development server in DEV mode:

```bash
MODE=dev yarn dev --turbo
```

Open [http://localhost:3000/](http://localhost:3000) with your browser to see the app running

## Implementation Notes

This repository contains an example of how to use a hexagonal architecture approach (A.K.A ports and adapters) in a
NextJS application.

## Implementation Notes

NextJS is an opinionated framework, and it forces us to have a specific directory structure for the React components
under the `app/` directory so certain files need to be placed in this directory. Everything else has been structured
following the hexagonal architecture directory structure in the `src/modules` directory.

This repository uses Next13 with the new experimental app directory, TurboPack and TailWind CSS.

The approach to replace different adapters (implementations of a port via an interface) is achieved in the following
way:

- When running the tests: In the `jest.config.js` file a `moduleNameMapper` configuration has been set.
- When running the app: a `tsconfig.dev.json` file where some extra `paths` configuration has been set. Additionally, I
  needed to add some pre/post scripts to dynamically update the `tsconfig.json` file since AFAIK TurboPack does not
  allow yet run using a different tsconfig file.  

This approach replaces dependencies at compile time, and no Dependency Injection mechanism is needed for it to work.