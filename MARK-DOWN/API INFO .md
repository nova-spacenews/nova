# API's INFO 


## to get the picture of day 

### **APOD** :

**Today picture URL :** `https://api.nasa.gov/planetary/apod?api_key=KEY`
**URL :** `https://api.nasa.gov/planetary/apod?date=YYYY-MM-DD&api_key=KEY`

**KEY :** `7igNwj6Mf0pYdpj7YPjmHZIAaczXEHqVIlswlhHT`


**DATA Sample :**

```json
{
"copyright": "Jean-Francois\nGraffand",
"date": "2021-04-10",
"explanation": "An intense band of zodiacal light is captured in this serene mountain and night skyscape from April 7. The panoramic view was recorded after three hours of hiking from a vantage looking west after sunset across the Pyrenees in southern France. At 2838 meters altitude, Mont Valier is the tallest peak near center. In the sky above, the familiar stars of Orion and the northern winter Milky Way are approaching the rugged western horizon. At the shoulder of Orion, Betelgeuse is one of three bright yellowish celestial beacons. It forms a triangle with fellow red giant star Aldebaran located below Betelgeuse and to the right, and the red planet Mars. Mars shines just under the band of the Milky Way, still immersed in the bright zodiacal light.   Tournament Earth: Vote for your favorite image from NASA's Earth Observatory",
"hdurl": "https://apod.nasa.gov/apod/image/2104/ZodiacalNight.jpg",
"media_type": "image",
"service_version": "v1",
"title": "Zodiacal Night",
"url": "https://apod.nasa.gov/apod/image/2104/ZodiacalNight1024.jpg"
}
```

**Object of data that we need :**

```js
{
    title : data.title ,// "Zodiacal Night"
    date : data.date, // "2021-04-10"
    explanation : data.explanation // "An intense band of ... etc "
    mediaURL : data.hdurl  // "https://apod.nasa.gov/apod/image/2104/ZodiacalNight.jpg"

}
```

## to get the space News 

### **Spaceflight News API** :

**Newest News URL :** `https://spaceflightnewsapi.net/api/v2/articles`

**URL :** `https://spaceflightnewsapi.net/api/v2/articles?_start=OFFSET` OFFSET must be integer 

**KEY :** This API doesn't need a key 


**DATA Sample :**
the received data will be array of 10 objects 
```json
[
{
"id": "607a05290e774c001d7cf230",
"title": "NASA selects SpaceX as its sole provider for a lunar lander",
"url": "https://arstechnica.com/science/2021/04/nasa-selects-spacex-as-its-sole-provider-for-a-lunar-lander/",
"imageUrl": "https://cdn.arstechnica.net/wp-content/uploads/2021/04/for_press_release.jpg",
"newsSite": "Arstechnica",
"summary": "\"We looked at what’s the best value to the government.\"",
"publishedAt": "2021-04-16T21:35:30.000Z",
"updatedAt": "2021-04-16T21:44:09.895Z",
"featured": false,
"launches": [],
"events": []
},
{},
{},
{},
{},
{},
{},
{},
{},
{}
]

```
**Array of objects that we need :**

```js
[{
    title : data.title ,// "NASA selects SpaceX as its sole provider for a lunar lander"
    date : data.date, // "2021-04-10"
    explanation : data.publishedAt ,// "2021-04-16"
    imgURL : data.imageUrl ,
    summary : data.summary,
    url : data.url

},
{},
{},
{},
{},
{},
{},
{},
{},
{}
]
```

## to get Movies About the space 

### **themoviedb** :



**URL :** `https://api.themoviedb.org/3/discover/movie?with_keywords=9882&&with_genres=18&&api_key=key` 

  * with_keywords=9882 refer to space ([keywords](https://api.themoviedb.org/3/search/keyword?query=space&&api_key=d3bb8f6b5e39439b0721c6adbd1c242f&&page=1 ))
  * with_genres=18     refer to drama  ([genres](https://www.reddit.com/r/radarr/comments/70egj8/tmdb_genre_id_values/))

**KEY :** d3bb8f6b5e39439b0721c6adbd1c242f


**DATA Sample :**

```json 
{
"page": 1,
"results": [
{
"adult": false,
"backdrop_path": "/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
"genre_ids": [
12,
18,
878
],
"id": 157336,
"original_language": "en",
"original_title": "Interstellar",
"overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
"popularity": 83.164,
"poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
"release_date": "2014-11-05",
"title": "Interstellar",
"video": false,
"vote_average": 8.3,
"vote_count": 25533
},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{},
{}
],
"total_pages": 3,
"total_results": 55
}

```

**Array of objects that we need :**

```js
[{
    
    title :"Interstellar" ,

    release_date : "2014-11-05", 

    overview :  "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage."

    imgURL : "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", //https://image.tmdb.org/t/p/w500${poster_path}  

    vote : 8.3,

},
{},
{},
{},
{},
{},
{},
{},
{},
{}
]
```