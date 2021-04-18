'use strict';
// Application Dependencies
const express = require('express');
require('dotenv').config();
const superagent = require('superagent')
const pg = require('pg');
const methodOverride = require('method-override');

// Application Setups
const server = express();
server.set('view engine','ejs');
server.use(express.static(__dirname + '/puplic'));
server.use(methodOverride('_method'));
server.use(express.urlencoded({extended:true}));
const PORT = process.env.PORT || 3000;
const client = new pg.Client({connectionString: process.env.DATABASE_URL});

//Rout to get the pages
server.get('/',homePage)
server.get('/news/:page',newsPage)
server.get('/movies',moviesPage)
server.get('/solar',solarPage)
server.get('/picture',picturePage)
server.get('/about',aboutUsPage)

// functionality routs ********************************************************************************

//Constructors *******************************************************************************************

function Movie (data){
//write your code here
}

function Picture (data){
//write your code here
}

function News (data){
  //write your code here
  this.title = data.title ;
  this.date = data.publishedAt.slice(0, 10);
  this.imgURL = data.imageUrl ;
  this.summary = data.summary;
  this.url = data.url;
}

function Planet (data){
  //write your code here
}

// Rout Handler Functions******************************************************************************************
function homePage(req,res) {
//write your code here
}

function newsPage(req,res) {
//write your code here
  let page = req.params.page;
  if(page<=0){page=1}
  let offsetValue = ((page -1)*10) +1 ;
  let newsULR = `https://spaceflightnewsapi.net/api/v2/articles?_start=${offsetValue}` ;
  superagent.get(newsULR)
    .then(data=>{
      let newsData = data.body;
      // res.send(newsData);
      let newsArr = newsData.map(val=>{
        return new News(val);
      })
      res.render('new',{newsArr : newsArr,pageNum:Number(page)})

      console.log(page);
    })
    .catch(err=>res.render('error'))
}

function moviesPage(req,res) {
//write your code here
}

function solarPage(req,res) {
//write your code here
}

function picturePage(req,res) {
//write your code here
}

function aboutUsPage(req,res) {
//write your code here
}

// ***************************************************************************************************************
server.get('*',(req,res)=>{
  res.render('error404')
})

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
