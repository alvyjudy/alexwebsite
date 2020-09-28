const path = require("path");
require("dotenv").config({path:path.resolve(__dirname, ".env")})

const app = require("./server/development");
app.listen(process.env.PORT,
  ()=>{
    console.log(`Development server, listening on port: ${process.env.PORT}`)
  })