import { collection } from '.';

export default async function getUsers(req, res) {
    if (req.method === 'GET') {
            const { email } = req.query;
            let result;
            if (email == undefined) {
               result = await collection.find({}).toArray();
            }
             result = await collection.find({ email: { $regex: new RegExp(email, 'i') } }).toArray();

            if (result.length > 0) {
                res.status(200).json(result);
            }
            else {
                res.status(404).json({message : "No users found"})
            }
    }
    else {
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}