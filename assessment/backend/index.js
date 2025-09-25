import express from "express"
import cors from 'cors';

const app=express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("server is ready")
})

app.get("/api/users",async(req,res)=>{
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    res.send(users.slice(0, 5));
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
})
const port=5000;

app.listen(port,()=>{
    console.log(`serve at http://localhost:${port}`)
})