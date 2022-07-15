module.exports = {
  productionSourceMap: false,

  configureWebpack: (config) => {
    config.resolve.extensions = ['*', '.js', '.vue', '.json', '.scss', '.ts'];
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/index.scss";',
      },
    },
  },

  chainWebpack: (config) => {
    // Only convert .svg files that are imported by these files as Vue component
    const FILE_RE = /\.(vue|js|ts|svg)$/;

    // Use vue-cli's default rule for svg in non .vue .js .ts files
    config.module.rule('svg').issuer(file => !FILE_RE.test(file));

    // Use our loader to handle svg imported by other files
    config.module
      .rule('svg-component')
      .test(/\.svg$/)
      .issuer(file => FILE_RE.test(file))
      .use('vue')
      .loader('vue-loader')
      .end()
      .use('svg-to-vue-component')
      .loader('svg-to-vue-component/loader');
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/vue3-ts-list/' : '/',

  lintOnSave: false,
};