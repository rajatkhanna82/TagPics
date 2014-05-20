'use strict';

var mongoose = require('mongoose'),
    // fs = require('fs'),
  User = mongoose.model('User'),
  Images = mongoose.model('Images');




// function getFiles(dir,files_){
//     if (typeof files_ === 'undefined') files=[];
//     var files = fs.readdirSync(dir);
//     for(var i in files){
//         if (!files.hasOwnProperty(i)) continue;
//         var name = dir+'/'+files[i];
//         if (fs.statSync(name).isDirectory()){
//             getFiles(name,files_);
//         }else{
//             files_.push(name);
//         }
//     }
//     return files_;
// }


// console.log(__dirname);//getFiles(__dirname+'/images/alila/'))
/**
 * Populate database with sample application data
 */

//Clear old things, then add things in
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
