DROP TABLE IF EXISTS pictures;
CREATE TABLE pictures (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  date VARCHAR(255),
  explanation TEXT,
  media_url VARCHAR(255),
  media_type VARCHAR(255)
);

--   this.title = data.title;
--        this.date= data.date;
--        this. = data.explanation;
--        this.media_url = data.hd_url;
  
INSERT INTO pictures (title,date,explanation,media_url,media_type) 
VALUES( 'The Iron Sun', 
'1996-05-21' ,
'The ultraviolet light emitted by eleven times ionized iron at temperatures over 2 million degrees Farenheit was used to record the above picture of the Sun on May 16. The image was made by the EIT camera onboard the SOHO spacecraft, a space observatory which can continuously observe the Sun. Eleven times ionized iron is atomic iron with eleven of its electrons stripped away. Here the electrons are stripped by the frantic collisions with other atoms and electrons which occur at the extreme temperatures in the Solar Corona. Since electrons are negatively charged, the resulting ionized iron atom is highly positively charged. Astronomers \shorthand\ for eleven times ionized iron is written \Fe XII\, the chemical symbol for iron followed by a Roman numeral 12 (Fe I is neutral iron).'
,'https://apod.nasa.gov/apod/image/fexiisun_eit_big.gif','image');