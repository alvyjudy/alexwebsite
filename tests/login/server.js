import express from "express";


const server = express();

server.get("/ping", (req, res)=>{
  res.status(200).send("ping")
})

server.post("/login", express.json(), (req, res)=>{
  if (req.body.email === 'correct') {
    res.status(200).json({
      userId: 1,
      tokenValue: "abcd"
    })
  } else if (req.body.email === 'server issue') {
    res.status(500)
  } else if (req.body.email === 'wrong cred') {
    res.status(403).send('incorrect credential')
  }
})

const serverIns = server.listen();
process.env.APIENDPOINT = "http://localhost:" + serverIns.address().port;


export {serverIns}