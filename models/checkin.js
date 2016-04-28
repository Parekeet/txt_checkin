var mongoose = require('mongoose'),
    debug    = require('debug')('app:models');

var checkInSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name:  { type: String, required: true }
});

// Add bcrypt hashing to model (works on a password field)!
checkInSchema.plugin(require('mongoose-bcrypt'));

// Add a "transformation" to the model's toJson function that
// stops the password field (even in digest format) from being
// returned in any response.
// checkInSchema.options.toJSON = {
//   transform: function(document, returnedObject, options) {
//     delete returnedObject.password;
//     return returnedObject;
//   }
// };

var CheckIn = mongoose.model('CheckIn', checkInSchema);

module.exports = CheckIn;
