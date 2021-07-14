/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    /* ... */
    // directory name: 'build directory'
    public: '/',
    src: '/dist',
  
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
  env: {
    API_KEY: 'PMAK-5ef63db179d23c004de50751-10300736bc550d2a891dc4355aab8d7a5c',
    BASE_URL: 'https://944ba3c5-94c3-4369-a9e6-a509d65912e2.mock.pstmn.io'
  },
};
