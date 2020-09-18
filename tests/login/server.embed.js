import express from "express";


const server = express();

server.get("/ping", (req, res)=>{
  res.status(200).send("ping")
})

server.post("/login", express.json(), (req, res)=>{
  if (req.body.email === 'correct') {
    setTimeout(()=>{
      res.status(200).json({
        userId: 1,
        tokenValue: "abcd"
      }) 
    }, 3000)
    
  } else if (req.body.email === 'server issue') {
    res.status(500)
  } else {
    res.status(403).send('incorrect credential')
  }
})

const serverIns = server.listen();
process.env.APIENDPOINT = "http://localhost:" + serverIns.address().port;
console.log("listening on", process.env.APIENDPOINT)

export {serverIns}