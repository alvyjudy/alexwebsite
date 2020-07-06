const express = require('express');
const path = require('path');

const app = express();

app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/dist/index.html"));
})

/* to start the server
$ export devMode='local' backEndIP=''
$ node serve.js
*/
if (process.env.devMode == 'local') {
  //redirect request to '/api/' to process.env.backEndIP
}

app.listen(process.env.PORT || 3001);
