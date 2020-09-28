const express = require("express");
const server = express();

const router = express.Router();

router.get("/", (req, res)=>{
  console.log(req.headers)
  res.status(200).send('hi')
})

server.use("/api", router)


const serverIns = server.listen(3003);

