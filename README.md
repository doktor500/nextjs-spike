## Getting Started

Setup an API Key to be able to fetch movies from [themoviedb.org](https://www.themoviedb.org/)

- Create a new account on [themoviedb.org/signup](https://www.themoviedb.org/signup)
- Go to settings [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api)
- Create two files (one will be used when running the app and the other one will be used when running the tests)
    ```bash
        touch .env.local
        touch .env.fakes.local
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

This repository uses Next13 with the new experimental app directory, TurboPack and TailWind CSS.

### Directory structure and conventions

NextJS is an opinionated framework, and it forces us to have a specific directory structure for the React components
under the `app/` directory so certain files need to be placed in this directory. Everything else has been structured
following the hexagonal architecture directory structure in the `src/modules` directory.

The approach to replace different adapters (implementations of a port via an interface) is achieved in the following
way:

- When running the tests: In the `jest.config.js` file a `moduleNameMapper` configuration has been set.
- When running the app: In the `tsconfig.dev.json` file extra `paths` configuration has been set. Additionally, I
  needed to add some pre/post scripts to dynamically update the `tsconfig.json` file since AFAIK TurboPack does not
  allow yet run using a alternative tsconfig files.

This approach replaces dependencies at build time, and no Dependency Injection mechanism is needed for it to work,
however, the files placed under the `fakes/` directory need to mirror the names and the directory structure of
the `src/` directory.

### Testing strategy

The integration tests exercise the real implementation and the fake implementation to ensure that both implementations
expose the exact same behaviour, by doing so, we are able to run other unit tests, acceptance tests or browser tests
using fake dependencies and have confidence that the app will behave in the exact same way.

If an external dependency fails, we will have an integration test failing, that will give us valuable feedback, since
the integration tests exercises a very specific behaviour of the external dependency, it will be easy to debug and
easier to know what has actually failed and why.

When running browser tests the idea is to run them against fake dependencies, this way these tests will be fast to run
and stable since they won't fail if the external dependency is experiencing issues, only the integration tests will.