'use strict';

let planetArr = [];
function Planet (img_url,title,description,age,distance,size){
  this.img_url = img_url;
  this.title = title;
  this.description = description;
  this.age = age;
  this.distance = distance;
  this.size = size;
  planetArr.push(this);

}
let jupiter  = new Planet (img_url,'Jupiter','Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. ','4.503 billion years','778.5 million km','69,911 km / 43,441 miles');

let mercury = new Planet (img_url,'Mercury','Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets.','4.503 billion years','57.91 million km','(2,440 km / 1,516 miles');

let venus = new Planet (img_url,'Venus','Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.','4.503 billion years','108.2 million km','6,052 km / 3,761 miles');

let saturn = new Planet (img_url,'Saturn','Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.','4.503 billion years','1.434 billion km','58,232 km / 36,184 miles');

let Mars = new Planet (img_url,'Mars','Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".','4.603 billion years','227.9 million km','3,390 km / 2,460 miles');

let earth = new Planet (img_url,'Earth','Earth is the third planet from the Sun and the only astronomical object known to harbor life. About 29% of Earths surface is land consisting of continents and islands.','4.543 billion years','150.23 million km','6,371 km / 3,959 miles');

let moon = new Planet (img_url,'The Moon','The Moon is Earths only proper natural satellite. At one-quarter the diameter of Earth, it is the largest natural satellite in the Solar System relative to the size of its planet, and the fifth largest satellite in the Solar System overall.','4.53 billion years','150 million kilometres','1,737.1 km');

let uranus = new Planet (img_url,'Uranus','Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.','4.503 billion years','2.871 billion km','25,362 km / 15,759 miles');

let neptune = new Planet (img_url,'Neptune','Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.','4.503 billion years','4.495 billion km','24,622 km / 15,299 miles');

let pluto = new Planet (img_url,'Pluto','Pluto is a dwarf planet in the Kuiper belt, a ring of bodies beyond the orbit of Neptune. It was the first and the largest Kuiper belt object to be discovered. After Pluto was discovered in 1930, it was declared to be the ninth planet from the Sun.','248.59 years','39.5 astronomical units','1,188.3 km');


