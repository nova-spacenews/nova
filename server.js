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
const client = new pg.Client( {
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
} );

//Rout to get the pages
server.get('/',homePage)
server.get('/news/:page',newsPage)
server.get('/movies',moviesPage)
server.get('/solar',solarPage)
server.get('/picture',picturePage)
server.get('/about',aboutUsPage)
server.get('/planet/earth',(req,res)=>{res.render('planet')})

server.post( '/addToFavorite', addToFavorite )
server.get( '/favorite', favoritePage )
server.delete( '/delete/:id', deleteMovie )
// functionality routs ********************************************************************************

//Constructors *******************************************************************************************

function Movie (data){
//write your code here
  this.title = data.original_title;
  this.release_date = data.release_date;
  this.vote = data.vote_average;
  this.image_url = (data.backdrop_path) ? `https://image.tmdb.org/t/p/w500${data.poster_path}` : `https://image.tmdb.org/t/p/w500${data.poster_path}`;
  this.overview = data.overview;
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
  res.render('index')
}

function newsPage(req,res) {
  let page = req.params.page;
  if(page<=0){page=1}
  let offsetValue = ((page -1)*10) +1 ;
  let newsULR = `https://spaceflightnewsapi.net/api/v2/articles?_start=${offsetValue}` ;
  superagent.get(newsULR)
    .then(data=>{
      let newsData = data.body;
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
  let pageNum = req.query.page;
  let moviesKey = process.env.MOVIES_KEY;
  ///// Ask about pagination /////
  let moviesURL = `https://api.themoviedb.org/3/discover/movie?with_keywords=9882&&with_genres=18&&api_key=${moviesKey}&&page=${pageNum}`;
  superagent.get( moviesURL )
    .then( moviesResult => {
      let moviesData = moviesResult.body.results;
      console.log( moviesData ); ///to make sure///
      let moviesArr = moviesData.map( val => {
        let newMovie = new Movie( val );
        return newMovie;
      } );
      res.render( 'movies', { moviesResult: moviesArr } );
    } )
    .catch( err => {
      res.render( 'error404', { error: err } );
    } );
}

function solarPage(req,res) {
//write your code here
  res.render('solarsystem');
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

function addToFavorite( req, res ) { ////NEW FUNCTION FOR NEW ROUTE////
  //write your code here
  let { title, release_date, vote, image_url, overview } = req.body;
  let SQL = `SELECT * FROM movies WHERE title=$1`;
  let safeValues = [title];
  client.query( SQL,safeValues )
    .then( data=>{
      if( data.rows[0] ){
        res.redirect( 'back' );
      }
      else {
        SQL = 'INSERT INTO movies (title, release_date, vote, image_url, overview) VALUES ($1,$2,$3,$4,$5) RETURNING *;';
        let safeValues2 = [title, release_date, vote, image_url, overview];
        client.query( SQL,safeValues2 )
          .then( insertingMovies =>{
            console.log( insertingMovies ); ///to make sure///
            res.redirect( 'back' );
            console.log( insertingMovies.rows[0].id,'id' ); ///to make sure///
          } )

          .catch( err =>{
            res.render( 'error404',{error:err} );
          } );
      }
    } );
}

function favoritePage( req, res ) {
  //write your code here
  let SQL = 'SELECT * FROM movies ;';
  console.log( req.params.id ); ///to make sure///
  client.query( SQL )
    .then( favoriteMovies=>{
      console.log( favoriteMovies );
      res.render( 'favorite',{favoriteArr:favoriteMovies.rows} ); ////[]////
    } )
    .catch( err=>{
      res.render( 'pages/error',{error:err} );
    } );
}

function deleteMovie( req,res ){ ////NEW FUNCTION FOR NEW ROUTE////
  //write your code here
  let SQL = 'DELETE FROM movies WHERE id=$1;' ;
  let safeValues = [req.params.id];
  client.query( SQL,safeValues )
    .then( res.redirect( '/favorite' ) ); ///to make sure///
}
// ***************************************************************************************************************
server.get('*',(req,res)=>{
  res.render('error404')
})

client.connect()
  .then(()=>{
    server.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
  })


