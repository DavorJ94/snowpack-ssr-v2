/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
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
    bundle: true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: "/to-do-app-improved",
    metaUrlPath: `dist`,
  },
};
