//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import sanjay from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var p="ILoveProgramming"
var pwd='';
app.use(sanjay.urlencoded({extended: true}));

app.use(auth);

app.get("/", (req, res) => {
  
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check",(req,res)=>{
    
    if(pwd==p) res.sendFile(__dirname+"/public/secret.html");
    else res.sendFile(__dirname + "/public/index.html");
    
})

function auth(req,res,next){
    // console.log(req.body["password"]);
    pwd=req.body["password"];
    next();
}

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});