const { connectToDatabase } = require('./mongodb.js');
const axios = require('axios'); // If you use Axios for API requests

async function fetchAndCacheData(tokenId) {
  const db = await connectToDatabase(process.env.MONGODB_URI);
  const collection = db.collection('your_collection_name'); // Replace with your collection name

  // Check cache
  const cachedData = await collection.findOne({ tokenId });
  if (cachedData) {
    return cachedData.data; // Assuming the stored data is under the 'data' field
  }

  // Fetch from external API
  try {
    // todo here replace with the external API
    const response = await axios.get(`https://external.api.com/data?tokenId=${tokenId}`);
    const data = response.data;

    // Store in cache
    await collection.insertOne({ tokenId, data, createdAt: new Date() });

    return data;
  } catch (error) {
    console.error('API fetch error:', error);
    throw new Error('Error fetching data from the API');
  }
}

module.exports = { fetchAndCacheData };
