# Software Requirements

## Vision



## Scope (In/Out)
**IN** 
1. The product will show the user the latest news and update them.
2. Users can view pictures of space by inserting dates.
3.Product will suggest movies for space enthusiasts.
4. User can access information about celestial bodies( stretch goal ).


**OUT**

  * Product will not provide a search for news based on subject.
  * Users cant save/bookmark news or information.


## Minimum Viable Product (MVP)



## Functional Requirements

* The user can see the space news
* Picture of the Day: will show the picture of the current day and the user can search for the picture of some day
* The user can search for a movie about space
* The User can figure out  our solar system

**Data Flow:**


* The user will enter the website, he will discover the home page and view the hero image to know about the website.
* when the user open the news page, the express server  will hit an API for the space news then will render the data on the page
* The news page will be supported by pagination  to figure out the old news
* when the user goes to the picture of days page, the server will hit an API server to get a picture of the current day then will render the data on the page
* On the picture of the day page, there is  a search bar to get a picture of someday and when the user submits it the server will check if the data exist in the database if not the server will hit the API server and get the data, save it in database and render the data on the page
* In the Movie page, the server will hit an API and get data about space movies
* On the solar system page, the server will get the data from the database and render