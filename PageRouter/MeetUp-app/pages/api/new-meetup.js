import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    console.log('Received data:', data);

    try {
      console.log('Connecting to MongoDB...');
      const client = await MongoClient.connect(
        process.env.MONGODB_URI
      );
      console.log('Connected to MongoDB');

      const db = client.db();
      const meetupsCollection = db.collection('meetups');

      console.log('Inserting document...');
      const result = await meetupsCollection.insertOne(data);
      console.log('Insert result:', result);

      client.close();

      return res.status(201).json({ message: 'Meetup inserted!' });
    } catch (error) {
      console.error('Failed to insert meetup:', error);
      return res.status(500).json({ message: 'Inserting meetup failed', error: error.message });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}
