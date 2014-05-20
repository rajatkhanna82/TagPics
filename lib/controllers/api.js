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