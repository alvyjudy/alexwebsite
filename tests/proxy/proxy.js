const Bundler = require('parcel-bundler');
const app = require('express')();
const path = require("path");
const {createProxyMiddleware} = require("http-proxy-middleware");

const file = path.join(__dirname + '/entry.html'); // Pass an absolute path to the entrypoint here
console.log(file)
const options = {
  watch: true,
  cache: false,
}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

app.use("/api", 
  (req, res, next)=>{console.log("proxy to backend"); next()},
  createProxyMiddleware({
    target: "http://localhost:3003",
    changeOrigin: true,
  }),
)

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(
  (req, res, next)=>{console.log('to parcel'); next()},
  bundler.middleware(),
);

// Listen on port 8080
app.listen(3002);