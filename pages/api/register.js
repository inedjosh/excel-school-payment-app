import User from './../../model/userModel'
import { dbConnect } from "../../lib/mongodb";

export default async(req, res) => {
    await dbConnect()

    const response = await User.create({userName: 'admin001', password: 'admin098'})

    res.json(response);
    
}

