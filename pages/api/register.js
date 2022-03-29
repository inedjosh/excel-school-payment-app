import {PrismaClient} from '@prisma/client'

export const prisma = new PrismaClient()

export default async(req, res) => {

    const data = JSON.parse(req.body)

    const registeredStudent = await prisma.studentRegistration.create({
        data
    })
   
    res.json(registeredStudent)

    const response = await res.json(registeredStudent)
    
}

 prisma