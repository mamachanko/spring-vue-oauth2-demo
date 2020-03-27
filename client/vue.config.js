module.exports = {
  devServer: {
    proxy: {
      "^/oauth": {
        target: "http://localhost:8080"
      }
    }
  }
};
