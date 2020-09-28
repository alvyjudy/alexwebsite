const path = require("path");
require("dotenv").config({path:path.resolve(__dirname, ".env")})
const Bundler = require('parcel-bundler');
const app = require('express')();
const {createProxyMiddleware} = require("http-proxy-middleware");

const file = path.resolve(__dirname, process.env.ENTRY_DEV);
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

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(
  (req, res, next)=>{console.log('to parcel'); next()},
  bundler.middleware(),
);

// Listen on port 8080
app.listen(process.env.PORT);