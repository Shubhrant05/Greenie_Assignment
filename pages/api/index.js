import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://shubhrant:Luucent0@cluster0.n1ukk8g.mongodb.net/';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

await client.connect();
const database = client.db('GreenieDB');

export const collection = database.collection('Users');