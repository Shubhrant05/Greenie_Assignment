import { collection } from ".";
      
export default async function createUser(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const dataStream = JSON.stringify(data)

      const query = {
        email: JSON.parse(dataStream).email,
      };

      const uniqueEmailCheck = await collection.findOne(query);
      if (!uniqueEmailCheck) {
        const result = await collection.insertOne(data);
        console.log('Data inserted:', result);
        res.status(200).json({ message: 'Data inserted successfully!' });
      }
      else {
        console.log("User already present")
        res.status(403).json({ message: 'Data could not be inserted' });
      }
  }
  else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
