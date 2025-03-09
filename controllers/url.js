import {url} from "../models/Url.js"
import shortid from 'shortid'

export const shorturl=async (req,res)=>{
    const longurl=req.body.longurl
    const shortcode=shortid.generate();
    const shorturl=`http://localhost:1000/${shortcode}`
//save to database
const newurl=new url({shortcode,longurl})
await newurl.save();
console.log("short saved=",newurl)

res.render("index.ejs", { shorturl }); // Corrected

}

export const getoriginalurl = async(req,res)=>{
    const shortcode = req.params.shortcode; // Corrected

    //find on the database
    const originalurl=await url.findOne({shortcode})
    if(originalurl){
        res.redirect(originalurl.longurl)
    }else{

    res.json({message:"invalide url"})
    }

}