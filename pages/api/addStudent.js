import { dbConnect } from "../../lib/mongodb";
import Student from './../../model/studentModel'

export default async (req, res ) => {
    await dbConnect()

const data = req.body
   
    try{

    const result = await Student.create(JSON.parse(data))

    res.send(result)

    }catch(err){
        throw new Error(err.message)
    }
    

}