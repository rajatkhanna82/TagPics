'use strict';

var mongoose = require('mongoose'),
    Images = mongoose.model('Images');

/**
 * Get awesome images
 */
exports.images = function(req, res) {

    console.log(req.route);
  return Images.find({}).exec(function (err, images) {
    if (!err) {
      return res.json(images);
    } else {
      return res.send(err);
    }
  });
};
exports.updateTags = function(req, res,next) {

  console.log(req.body);
  var imageId = req.body._id,
  imageTags = req.body.tags;
  Images.findById(imageId, function (err, image) {
    image.tags = imageTags;
    image.save(function(err) {
      if (err) return res.send(400);

      res.send(200);
    });
  });  
};