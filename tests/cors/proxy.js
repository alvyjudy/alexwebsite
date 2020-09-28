const Bundler = require('parcel-bundler');
const app = require('express')();
const path = require("path");

const file = path.join(__dirname + '/entry.html'); // Pass an absolute path to the entrypoint here
console.log(file)
const options = {
  watch: false,
}; // See options section of api docs, for the possibilities

// Initialize a new bundler using a file and options
const bundler = new Bundler(file, options);

// Let express use the bundler middleware, this will let Parcel handle every request over your express server
app.use(bundler.middleware());

// Listen on port 8080
app.listen(3002);