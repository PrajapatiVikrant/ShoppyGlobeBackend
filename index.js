import express from "express"
import { config } from "dotenv";
config();
const app = express();

const port = process.env.PORT || 4000;


app.use('/shoppyglobe/api/auth',(req,res)=>{

})

app.use('/shoppyglobe',(req,res)=>{

})




app.listen(port,()=>console.log(`server listening at ${port}`));
