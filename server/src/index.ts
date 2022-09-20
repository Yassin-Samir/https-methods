import express from "express"
import { AppDataSource } from "./database/datasource"
import { User } from "./database/manga"
import cors from "cors"
const app = express()
app.use(cors())
app.use(express.json())










app.get("/users",async(req,res)=>{
    const data  = await User.find()
    res.send(data)
})



app.post("/users",async(req,res)=>{
    console.log( req.body)
    let {name , age} =  req.body
    let user = new User()
    user.Name = name
    user.age = age
    try{
        await user.save()
    }catch(e){

    }
    res.send(user)
})



app.delete("/users",async(req,res)=>{

})

app.put("/users",async(req,res)=>{

})






AppDataSource.initialize().then(()=>{
    app.listen(3000,()=>{
        console.log("localhost:3000")
    })
}).catch(e=>console.log(e))




