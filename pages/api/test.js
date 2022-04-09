import { clientPromise } from "../../lib/mongodb";

export default async (req, res) => {
    const client = await clientPromise
    const { fieldvalue } = req.query
    const database = client.db('excel');
    const userdb = await database.collection('studentData')
      .find({ "<field>": `${ fieldvalue }` })
      .project({ "_id": 0 })
      .toArray();
  res.json(userdb)
}

