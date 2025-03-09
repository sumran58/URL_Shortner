import express from 'express'
import mongoose from 'mongoose'
import{shorturl,getoriginalurl} from './controllers/url.js'
const app=express();
app.use(express.urlencoded({extended:true}))


mongoose.connect("mongodb+srv://sumranharchirkar58:sumran123@cluster0.qg5tw.mongodb.net/", {
    dbName: "NodeJs_Mastery_Course",
})
.then(() => console.log("Mongodb connected successfully!"))
.catch((err) => console.error("MongoDB connection error:", err));

//rendering the ejs file
app.get('/',(req,res)=>{
    res.render('index.ejs',{shorturl :null})
})
//shortening url logic
app.post('/short',shorturl)

//dynamic routing(redirecting to the original url)
app.get("/:shortcode",getoriginalurl)




const port=1000;
app.listen(port,()=>console.log(`Sever is running on ${port}`))