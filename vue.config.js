module.exports = {
  publicPath: "./",
  devServer: {
    port: 4173,
    allowedHosts: [".preview.csb.app", "wr6gzw-4173.csb.app", "csb.app"],
  },
  chainWebpack: (config) => {
    config.plugins.delete("case-sensitive-paths");

    config.resolve.alias.set("vue", "@vue/compat");

    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        };
      });
  },
};
