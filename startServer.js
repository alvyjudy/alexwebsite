const path = require("path");
require("dotenv").config({path:path.resolve(__dirname, ".env")})

const app = require("./server/production");
app.listen(process.env.PORT, ()=>{
  console.log(`Production server, listening on port: ${process.env.PORT}`)
})