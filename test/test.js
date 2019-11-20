"use strict";

var assert = require('assert');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var functions = require('../sum.js');

describe('Data', function () {

  var tests

  before(async () => {

    let client = await MongoClient.connect(url,
      { useUnifiedTopology: true });

    let db = client.db('test');
    try {
      tests = await db.collection('data').find({}).toArray();
    }
    finally {
      client.close();
    }
  })

  it('is stil consistent', () => {
    for (let test of tests) {
      test.data.forEach(data => {
        assert.equal(functions[test.name](...data.args), data.return);
      })
    }
  });
});