module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:8080"
      },
      "^/oauth": {
        target: "http://localhost:8080"
      },
      "^/login": {
        target: "http://localhost:8080"
      },
      "^/logout": {
        target: "http://localhost:8080"
      }
    }
  }
};
