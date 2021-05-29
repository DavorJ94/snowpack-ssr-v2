/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    counter: "/dist",
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: "routes", src: ".*", dest: "/index.html" },
  ],
  optimize: {
    /* Example: Bundle your final build: */
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    open: "chrome"
  },
  buildOptions: {
    baseUrl: "/",
    metaUrlPath: `dist`,
  },

};
