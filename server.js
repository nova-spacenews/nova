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
server.get('/news',newsPage)
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
  this.title = data.title;
  this.date= data.date;
  this.explanation = data.explanation;
  this.media_url = data.hdurl;

//write your code here
}

function News (data){
  //write your code here
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
}

function moviesPage(req,res) {
//write your code here
}

function solarPage(req,res) {
//write your code here
}

function picturePage(req,res) {
  // console.log(Object.keys(req.body).length);
  //
  console.log(Date.now());
  const pictureKey = process.env.NASA_KEY;
  let date = (Object.keys(req.query).length) ? req.query.date : '';
  let SQL = 'SELECT * FROM pictures';
  client.query(SQL)
    .then(picturesData=>{
      let dateArr = picturesData.rows.filter(row => {
        if (row.date === date){ return 1;}

      });
      console.log(dateArr);

      if (dateArr.length) {


        res.render('./picture.ejs' , {pictureRend:dateArr[0]});

      } else {



        let URL = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${pictureKey}`;
        superagent.get(URL)
          .then(data=>{
            let SQL = `INSERT INTO pictures (title,date,explanation,media_url) VALUES ($1,$2,$3,$4) RETURNING * ` ;
            let picObj = new Picture(data.body);
            let safeValues = [picObj.title,picObj.date,picObj.explanation,picObj.media_url];

            client.query(SQL,safeValues)
              .then(()=>{
                res.render('./picture.ejs' , {pictureRend:picObj});
              })

          }).catch(errors=>{
            console.error(errors);
            res.render('./picture.ejs', {pictureRend:false});
          });
      }
    });

//write your code here
}

function aboutUsPage(req,res) {
//write your code here
}

// ***************************************************************************************************************
server.get('*',(req,res)=>{

})

server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));

// client.connect()
//   .then( () => {
//     server.listen( PORT, () => console.log( `Listening on port: ${PORT}` ) );
//   } );
