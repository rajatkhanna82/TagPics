'use strict';

var mongoose = require('mongoose'),
    fs = require('fs'),
  ExifImage = require('exif').ExifImage,
  User = mongoose.model('User'),

  Images = mongoose.model('Images');





function getFiles(dir,files_){
    if (typeof files_ === 'undefined') files=[];
    var files = fs.readdirSync(dir);
    for(var i in files){
        if (!files.hasOwnProperty(i)) continue;
        var name = dir+'/'+files[i];
        if (fs.statSync(name).isDirectory()){
            getFiles(name,files_);
        }else{
            if(name.indexOf('.jpg') !== -1){

              files_.push(name.slice(6));

            }
        }
    }
    return files_;
}
function getExifData(image){
  new ExifImage({image: image},function(err, exifData){
    if(err){
      console.log('Error :'+ err.message);
    }else{
      console.log(exifData);
    }
  });
}

getExifData('')
function updateDatabase(){

var files = [];
getFiles('./app/images/alila',files);
console.log(files);
 files.forEach(function(filename){
    Images.find({pathname : filename},function(err,found){
        // if(err) return throw err;

        if(found.length ===0){
          Images.create({pathname :filename, tags :""});
         
          console.log("adding to database ...",found.length,filename);
        }
    });
 });


};
updateDatabase();
/**
 * Populate database with sample application data
 */

// Clear old things, then add things in
// Images.find({}).remove(function() {
//   Images.create({
//         pathname : 'images/alila/01.jpg',
//         tags : 'good vacation '
//       },
//       {
//         pathname : 'images/alila/02.jpg',
//         tags : 'vacation '
//       },
//       {
//         pathname : 'images/alila/03.jpg',
//         tags : 'vacation'
//       },
//       {
//         pathname : 'images/alila/04.jpg',
//         tags : 'trip'
//       },
//       {
//         pathname : 'images/alila/05.jpg',
//         tags : 'trip'
//       },
//       {
//         pathname : 'images/alila/06.jpg',
//         tags : 'beach resort'
//       },
//             {
//         pathname : 'images/alila/07.jpg',
//         tags : 'beach vacation '
//       },
//       {
//         pathname : 'images/alila/08.jpg',
//         tags : ''
//       },
//       {
//         pathname : 'images/alila/09.jpg',
//         tags : 'trip'
//       },
//       {
//         pathname : 'images/alila/10.jpg',
//         tags : 'home'
//       }, function() {
//       console.log('finished populating things');
//     }
//   );
// });

// Clear old users, then add a default user
User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, function() {
      console.log('finished populating users');
    }
  );
});
