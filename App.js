const express = require('express')
const app = express()
let ejs = require("ejs")
const bodyParser = require('body-parser')
app.set("view engine","ejs")






app.listen(4000, () => {
    console.log(`Example app listening on port ${4000}!`)
}) 

var ToDayDate = new Date()
app.get('/asldkf', (req, res) => {
    res.write(`<h2>This is Our Header ${ToDayDate.getDate()}</h2>`)
    res.write(`<p>This is Paragraph</p>`)
    res.write(`<mark>This is Paragraph</mark>`)
    res.end()
})
app.get('/home', (req, res) => {
    res.sendFile(__dirname+ "/index.html")
})
app.get("/books",(req,res)=>{
    res.sendFile(__dirname+"/Books.html")
})

app.get('/ejsFile',(req,res)=>{
    if(ToDayDate.getDay() == 0){
        var Day = "جمعه"
    }else{
        var Day = "روز کاری هفته"
    }
    res.render('index',{vToDay:Day})
})

// app.get('/ejsFileDate',(req,res)=>{
//     if(ToDayDate.getDay() == 6){
//         var Day = "امروز شنبه است"
//     }
//     else if(ToDayDate.getDay() == 7){
//         var Day = "امروز 1 شنبه است"
//     }
//     else if(ToDayDate.getDay() == 1){
//         var Day = "امروز 2 شنبه است"
//     }
//     else if(ToDayDate.getDay() == 2){
//         var Day = "امروز 3 شنبه است"
//     }
//     else if(ToDayDate.getDay() == 3){
//         var Day = "امروز 4 شنبه است"
//     }
//     else if(ToDayDate.getDay() == 4){
//         var Day = "امروز 5 شنبه است"
//     }
//     else{
//         var Day = "امروز جمعه است" 
//     }
//     res.render('index',{vToDay:Day})
// })
var Day;
// console.log(ToDayDate.getDay())
app.get("/ejsSwitch",(req,res)=>{
    switch(ToDayDate.getDay()){
        case 0:
             Day = "امروز 1 شنبه است"
            res.render('index',{vToDay:Day})
            break;
        case 1: 
             Day = "امروز 2 شنبه است"
            res.render('index',{vToDay:Day})
            break;
        case 2: 
             Day = "امروز 3 شنبه است"
            res.render('index',{vToDay:Day})
            break;
        case 3: 
             Day = "امروز 4 شنبه است"
            res.render('index',{vToDay:Day}) 
            break;
        case 4: 
             Day = "امروز 5 شنبه است"
            res.render('index',{vToDay:Day})
            break; 
        case 5: 
             Day = "امروز جمعه است"
            res.render('index',{vToDay:Day})
            break;
        case 6:  
             Day = "امروز شنبه است"  //red 
            res.render('index',{vToDay:Day})
            break;
        default:
            console.log("Doy not Found")
            break;
    }
}) 

var day = ''
var option = {
    weekday:"long",
    day:"numeric",
    month:"long"
}
day =ToDayDate.toLocaleDateString("Fa-IR",option) 
app.get("/Date",(req,res)=>{
    res.render("index",{vToDay:day})
})

app.get("/booook",(req,res)=>{
    res.render("Books")
})
app.use(bodyParser.urlencoded({extended:true}))

var StName = [ 'ahmad' , 'mohamad' , 'asee' ]
app.get('/',(req,res)=>{
    res.render("Post",{Vstname:StName})
})

app.post("/",(req,res)=>{
    var name = req.body.name
    StName.push(name)
    res.render("Post",{Vstname:StName})
    // res.render("Post",{name:name}) 
    // console.log(name)

})