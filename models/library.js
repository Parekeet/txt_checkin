var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var librarySchema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  content:  { type: String, required: true }
});

// Add bcrypt hashing to model (works on a password field)!
librarySchema.plugin(require('mongoose-bcrypt'));

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
librarySchema.options.toJSON = {
  transform: function(document, returnedObject, options) {
    delete returnedObject.password;
    return returnedObject;
  }
};

var Library = mongoose.model('Library', librarySchema);

module.exports = Library;
