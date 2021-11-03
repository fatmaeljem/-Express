const express = require ('express');
let app = express ();

app.use (addActiveTime =( req , res, next )=> {
let requestAt= new Date().getHours()
if((requestAt<= 9)||(requestAt>=17))
{res.send("no access")}
else { next() 
app.use(express.static(__dirname + '/public'))} })
app.listen(5000,(err)=>{
    if(err) console.log("server is not running")
    else console.log("server is running on port 5000")
})
