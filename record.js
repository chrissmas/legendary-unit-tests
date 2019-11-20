var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';

// **********************************************

module.exports = {
  record: function(handle, ...args){

    // run the function
    let result = handle(...args);

    // save args and results to database
    MongoClient.connect(url, { useUnifiedTopology: true }, function(err, db){
      if (err) throw err;
      var dbo = db.db('test');
      var newvalues = {
        $addToSet:
        {
          data: { 'args': args, 'return': result }
        }
      };

      dbo.collection('data').updateOne({ name: handle.name }, newvalues, 
        { upsert: true, useUnifiedTopology: true }, function(err, res){
        if (err) throw err;
        db.close();
      });
    });

    return result;

  },
};
