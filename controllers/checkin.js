var CheckIn = require("../models/checkin");

module.exports = {
  create: create
};

function create (req, res, next) {
  console.log("I'm working?");

  var newCheckIn = new CheckIn(req.body);
  newCheckIn.save(function(err, savedCheckIn){
    if (err) next(err)

      res.json(savedCheckIn);
  });
};
