'use strict';
let planet =$('.planetInfo h1').text().toString();
console.log(planet);
if(planet ===' Saturn '){
  console.log('okay')
  $('.imageRotation').removeClass('imageRotation');
  $('.planetInfo img').addClass('saturn');
}


