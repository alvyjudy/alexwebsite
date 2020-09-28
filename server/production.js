const path = require("path");
require("dotenv").config({path:path.resolve(__dirname, ".env")})
const Bundler = require('parcel-bundler');
const express = require("express")
const app = express();
const {createProxyMiddleware} = require("http-proxy-middleware");

const file = path.resolve(__dirname, "../dist/entry.html");

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
  (req, res) => {res.status(200).sendFile(file)}
)

module.exports = app