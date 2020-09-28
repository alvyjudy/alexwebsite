const path = require("path");
require("dotenv").config({path:path.resolve(__dirname, ".env")})
const Bundler = require('parcel-bundler');
const express = require("express")
const app = express();
const {createProxyMiddleware} = require("http-proxy-middleware");

const file = path.resolve(__dirname, process.env.ENTRY_PROD);
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
  express.static("dist")
);

app.use(
  (req, res) => {res.status(200).sendFile(path.resolve(__dirname, ('./dist/entry.html')))}
)

// Listen on port 8080
app.listen(process.env.PORT, ()=>{
  console.log(`Server running on ${process.env.PORT}`)});