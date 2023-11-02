const { MongoClient } = require('mongodb');

let db = null;

async function connectToDatabase(uri) {
  if (db) return db;

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  await client.connect();
  db = client.db('your_database_name'); // Replace with your database name
  return db;
}

module.exports = { connectToDatabase };

