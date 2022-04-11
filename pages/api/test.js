import { dbConnect } from "../../lib/mongodb";
import Student from './../../model/studentModel'

  

export async function loadData() {

  await dbConnect()
  
  try{
    const result = await Student.find({})
    console.log(result)
const data = await result.json()

const results = JSON.parse(JSON.stringify(data))

return results
  }catch(err){
    console.log(err)
  }

}

