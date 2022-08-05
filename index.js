const experss = require('express');
const app = experss();
const PORT = 3001;

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");
});
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/taiangle.html");
});

app.listen(PORT,()=>{
    console.log(`Server is runing at http://localhost:${PORT}`);
})