const experss = require('express');
const bodyParser = require('body-parser');
const app = experss();
const PORT = 3001;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.get("/circle",(req,res)=>{
    res.sendFile(__dirname+"/circle.html");
});
app.get("/triangle",(req,res)=>{
    res.sendFile(__dirname+"/taiangle.html");
});

app.post("/triangle",(req,res)=>{
    const height = req.body.height;
    const base = req.body.base;
    const area = 0.5*base*height;
    res.send(`<h2>Area of Triangle is:${area}</h2>`);
});

app.post("/circle",(req,res)=>{
    const radius = req.body.radius;
    const area = Math.PI * radius * radius;
    res.send(`<h2>Area of Circle is:${area}</h2>`);
});

app.listen(PORT,()=>{
    console.log(`Server is runing at http://localhost:${PORT}`);
})