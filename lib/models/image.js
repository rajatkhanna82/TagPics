'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var ImagesSchema = new Schema({
  pathname: String,
  tags: String,
});

/**
 * Validations
 */
ImagesSchema.path('pathname').validate(function (filename) {
  // TODO :- Check if the filename and the directory is valid;
  return true;
}, 'Must be a valid Image path name.');

mongoose.model('Images', ImagesSchema);
