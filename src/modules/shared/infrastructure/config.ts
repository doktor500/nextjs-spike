export const config = Object.freeze({
  LAUNCH_DARKLY_SDK_KEY: process.env.LAUNCH_DARKLY_SDK_KEY as string,
  MOVIE_DB_API_KEY: process.env.MOVIE_DB_API_KEY as string,
  SANITY_IO_PROJECT_ID: process.env.SANITY_IO_PROJECT_ID as string,
  SANITY_IO_API_VERSION: process.env.SANITY_IO_API_VERSION as string,
  SANITY_IO_DATASET: process.env.SANITY_IO_DATASET as string,
  CONTENTFUL_SPACE: process.env.CONTENTFUL_SPACE as string,
  CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT as string,
  CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  STRAPI_IO_API_TOKEN: process.env.STRAPI_IO_API_TOKEN as string,
});
