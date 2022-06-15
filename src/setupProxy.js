const { createProxyMiddleware } = require("http-proxy-middleware");

const target = process.env?.API_SERVER ?? "http://localhost:8080";

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      changeOrigin: true,
      target,
    })
  );
};
