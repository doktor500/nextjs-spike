## Getting Started

Set up an API Key to be able to fetch movies from [themoviedb.org](https://www.themoviedb.org/)

- Create a new account on [themoviedb.org/signup](https://www.themoviedb.org/signup)
- Go to settings [themoviedb.org/settings/api](https://www.themoviedb.org/settings/api) and create a new API Key
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

This repository contains an example of how to use a hexagonal architecture approach (A.K.A. ports and adapters) in a
NextJS application.

This repository uses Next13 with the new experimental app directory, TurboPack and TailWind CSS.

### Directory structure and conventions

NextJS is an opinionated framework, and it forces us to have a specific directory structure for the React components
under the `app/` directory so certain files need to be placed in this directory, everything else has been organised
following the hexagonal architecture directory structure in the `src/modules` directory.

The approach to replace different adapters (implementations of a port via an interface) is achieved in the following
way:

- When running the tests: In the `jest.config.js` file a `moduleNameMapper` configuration has been set.
- When running the app: In the `tsconfig.dev.json` file extra `paths` configuration has been set. Additionally, I
  needed to add some pre/post scripts to dynamically update the `tsconfig.json` file since TurboPack does not
  allow yet to run the app using an alternative tsconfig file.

This approach replaces dependencies at build time, and no Dependency Injection mechanism is needed for it to work,
however, the files placed under the `fakes/` directory need to mirror the names and the directory structure of
the `src/` directory.

### Testing strategy

The integration tests are exercising the real implementation and the fake implementation to ensure that both
implementations expose the exact same behaviour, by doing so, we are able to run other unit tests, acceptance tests or
browser tests using fake dependencies and having confidence that the app will behave in the exact same way.

If an external dependency fails, we will have an integration test failing, which should give us valuable feedback. The
integration tests exercise a very specific behaviour of the external dependency, it will be easy to debug and easier to
know what has actually failed and why.

When running browser tests the idea is to run them against fake dependencies, this way these tests will be fast to run
and stable since they won't fail if the external dependency is experiencing issues, only the integration tests will.

Note how the `app/movies/page.test.tsx` can use now a fake implementation of the Movies Catalogue, there is no need to
use complex mocking frameworks to check that the content is rendered on the page as we expect.

When implementing integrations against internal APIs that we have control over, we could also implement contract tests
because they offer some advantages over the traditional integration testing approach.

### Hexagonal architecture

By following the approach of having a port (interface) and an adapter that is the implementation of the interface, and
placing everything that has to do with external dependencies in the infrastructure directory, we are creating an
anti-corruption layer on top of those external dependencies like what we've done here with
the [themoviedb.org](https://www.themoviedb.org/) external API.

Note that the `MoviesCatalogue` implementation returns domain objects such as a `Movie` and not entities or types that
belong to the external dependency, the adapter is responsible to adapt the domain from the external dependency to the
core domain of the app.

This way to structure the code and dependencies allow us to isolate the system from external dependencies and simplify
the migration to a different API or provider if we need to do so.

Also, if we use the standard way of structuring directories and separating the code into 3 different layers

```
  - domain
  - application
  - infrastructure
```

we are able to move from one codebase to another and understand how the project is structured no matter the tech stack
or the framework being used. In this particular case, we can't achieve that with the `app/` directory since NextJS is a
very opinionated framework, but we have minimised the impact of it. You can reason about the `app/` directory as a
directory that should live inside `infrastructure/` and a directory that should contain everything related to
presentational aspects of this app.

An eslint plugin called `eslint-plugin-hexagonal-architecture` has been added to the project in order to have a way of
enforcing the hexagonal architecture directory structure, so, if for instance, a domain entity imports a file from the
infrastructure or application layers, the linter will fail and the error will be visible on the IDE if configured
correctly.