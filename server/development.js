
const Bundler = require('parcel-bundler');
const app = require('express')();
const {createProxyMiddleware} = require("http-proxy-middleware");

const file = path.resolve(__dirname, "../src/entry.html");
const options = {
  watch: true,
  cache: false,
}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

app.use("/api", 
  (req, res, next)=>{console.log("proxy to backend"); next()},
  createProxyMiddleware({
    target: process.env.API,
    changeOrigin: true,
  }),
)

app.use(
  (req, res, next)=>{console.log('to parcel'); next()},
  bundler.middleware(),
);

module.exports = app