import { dbConnect } from "../../lib/mongodb";
import User from './../../model/userModel'

export default async (req, res) => {
    await dbConnect()

    const result = await User.find({})

    console.log(result)
    res.send(result)
}