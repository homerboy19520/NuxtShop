export default {
  target: 'static',

  mode: 'universal',

  head: {
    title: 'shop',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: './favicon.ico' },
      { rel: 'stylesheet', href: './fonts.css' },
    ],
  },

  css: ['~assets/styles/styles.css'],

  plugins: [
    '~plugins/scrollto.js',
    '~plugins/swiper.js',
    { ssr: false, src: '~plugins/bodyScrollLock' },
  ],

  components: true,

  buildModules: ['@nuxtjs/eslint-module'],

  modules: [],

  build: {
    // filenames: {
    //   app: ({ isDev, isModern }) =>
    //     isDev
    //       ? `[name]${isModern ? '.modern' : ''}.js`
    //       : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
    //   chunk: ({ isDev, isModern }) =>
    //     isDev
    //       ? `[name]${isModern ? '.modern' : ''}.js`
    //       : `[contenthash:7]${isModern ? '.modern' : ''}.js`,
    //   css: ({ isDev }) => (isDev ? '[name].css' : 'css/[contenthash:7].css'),
    //   img: ({ isDev }) =>
    //     isDev ? '[path][name].[ext]' : 'img/[name].[contenthash:7].[ext]',
    //   font: ({ isDev }) =>
    //     isDev ? '[path][name].[ext]' : 'fonts/[name].[contenthash:7].[ext]',
    //   video: ({ isDev }) =>
    //     isDev ? '[path][name].[ext]' : 'videos/[name].[contenthash:7].[ext]',
    // },

    extractCSS: {
      ignoreOrder: true,
    },

    optimization: {
      minimize: false,
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        name: undefined,
        cacheGroups: {},
      },
    },
  },

  generate: {
    subFolders: false,
    dir: 'dist',
    crawler: false,
  },

  router: {
    // base: process.env.DEPLOY_ENV === 'STATIC' ? '/NuxtShop/' : '.',
    base: '.',
  },

  render: {
    compressor: false,
    etag: false,
    static: {
      etag: false,
    },
    spaScripts: false,
  },

  loading: { color: '#4353FF' },
}
