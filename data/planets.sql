DROP TABLE IF EXISTS planetable;
CREATE TABLE planetable(
    id SERIAL PRIMARY KEY,
    img_url VARCHAR(255),
    title VARCHAR(255),
    age VARCHAR(255),
    distance  VARCHAR(255),
    size  VARCHAR(255),
    description TEXT 
);

INSERT INTO planetable (img_url,title,description,age,distance,size)
VALUES('../img/16_jupiter_new.png','Jupiter','Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass one-thousandth that of the Sun, but two and a half times that of all the other planets in the Solar System combined. ','4.503 billion years','778.5 million km','69,911 km / 43,441 miles');

INSERT INTO planetable (img_url,title,description,age,distance,size)
VALUES('../img/18_mercury_new.png','Mercury','Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Suns planets.','4.503 billion years','57.91 million km','2,440 km / 1,516 miles');

INSERT INTO planeTable (img_url,title,description,age,distance,size)
VALUES('../img/27_venus_jg.png','Venus','Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earths night sky after the Moon, Venus can cast shadows and can be, on rare occasion, visible to the naked eye in broad daylight.','4.503 billion years','108.2 million km','6,052 km / 3,761 miles');

INSERT INTO planetable (img_url,title,description,age,distance,size)
VALUES('../img/28_saturn.png','Saturn','Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth; however, with its larger volume, Saturn is over 95 times more massive.','4.503 billion years','1.434 billion km','58,232 km / 36,184 miles');

INSERT INTO planetable (img_url,title,description,age,distance,size)
VALUES('../img/19_mars.png','Mars','Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".','4.603 billion years','227.9 million km','3,390 km / 2,460 miles');

INSERT INTO planetable (img_url,title,description,age,distance,size)
VALUES('../img/31_earth_moon.png','The Moon','The Moon is Earths only proper natural satellite. At one-quarter the diameter of Earth, it is the largest natural satellite in the Solar System relative to the size of its planet, and the fifth largest satellite in the Solar System overall.','4.53 billion years','150 million kilometres','1,737.1 km');

INSERT INTO planetable (img_url,title,description,age,distance,size)
VALUES('../img/29_uranus.png','Uranus','Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus, who, according to Greek mythology, was the grandfather of Zeus and father of Cronus. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.','4.503 billion years','2.871 billion km','25,362 km / 15,759 miles');

INSERT INTO planetable (img_url,title,description,age,distance,size)
VALUES('../img/30_neptune.png','Neptune','Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, slightly more massive than its near-twin Uranus.','4.503 billion years','4.495 billion km','24,622 km / 15,299 miles');





