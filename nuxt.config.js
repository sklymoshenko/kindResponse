
module.exports = {
  ssr: false,
  /*
  ** Headers of the page
  */
  head: {
    title: "Kind Response",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: process.env.npm_package_description || "" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Roboto&display=swap"
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: "#fff" },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    "@nuxt/typescript-build",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    "@nuxtjs/pwa"
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    babel: {
      plugins: [
        ["@babel/proposal-decorators", { legacy: true }],
        ["@babel/proposal-class-properties", { loose: true }]
      ],
    },
    extend(_config, _ctx) {
    }
  }
};
