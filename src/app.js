
///////////////////////////////////////////////
const express=require("express")
const app=express()
const path=require("path")

const port=process.env.PORT || 3000
//To configure template engine
app.use(express.static('public'));
app.set('view engine','hbs');

const viewsDirectory=path.join(__dirname,'../temp1/views')
app.set("views",viewsDirectory)

var hbs= require('hbs')
const partialsPath=path.join(__dirname,'../temp1/partials')
hbs.registerPartials(partialsPath)

app.get('/',(req,res)=>{
    res.render('index',{
        title:"Home",
        desc:"This is the home page"        
    })
})

app.get('/service',(req,res)=>{
    res.render('service',{
        title:"Service",
        name:"Alia Talha",
        city:"Cairo",
        age:20,
        img1:"images/dubai.jpg",
    }) 
})

app.get('/team',(req,res)=>{
    res.render('team',{
        title:"Team",
        name:"Menna",
        city:"Cairo",
        age:21,
        img2:"../public/images/CROATIA.jpg",
    }) 
})
app.get('/contact',(req,res)=>{
    res.render('contact',{
        title:"Contact",
        email:"info@example.com",
        phone:"+1 234 567 890"
    })
})

app.get('/social',(req,res)=>{
    res.render('social',{
        title:"Social "
    })
})

app.listen(port,()=>{
    console.log("App is listening on port 3000")
})


//use nodemon src/app.js to run to listen all the updates
// nodemon src/app.js -e  js,hbs