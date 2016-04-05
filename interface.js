/*
 *  Inserts "doc" into the collection "movies".
 */
exports.insert = function(db, doc, callback) {
  // TODO: implement
  db.collection('movies').insert(doc, function(err, records) {
    if (err) throw err;
    callback(null, []);
  });
};

/*
 *  Finds all documents in the "movies" collection
 *  whose "director" field equals the given director,
 *  ordered by the movie's "title" field. See
 *  http://mongodb.github.io/node-mongodb-native/2.0/api/Cursor.html#sort
 */
exports.byDirector = function(db, director, callback) {
  // TODO: implement

    // Create a collection to hold our documents
    var collection = db.collection('movies');

      // Retrieve all the documents in the collection
      collection.find({director: director}).sort({'title': 1} ).toArray(function(err, documents) {
        callback(null, documents);
      });
};
