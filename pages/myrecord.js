import React from 'react'
import { useRouter } from 'next/router'
import { dbConnect } from "../lib/mongodb";
import Student from './../model/studentModel'
import styles from  "./../styles/form.module.css";
import Image from 'next/image'

function myrecord({data}) {
  const router = useRouter()
  const { id } = router.query
// console.log(data)
  // if()
  const obj = data.find(record => record._id == id)
 
  if(obj !== undefined){
  return (
    <div className={styles.form}>
    <h3  className={styles.topicAdmin}>Student's Data</h3>
    
       
                <div className={styles.div}>
                
                <img src={obj.studentPassport}  alt={'students passport'} className={styles.passport}  />
                    <p> Name: {obj.studentName}</p>
                    <p> Date of Birth: {obj.studentDob}</p>
                    <p> Age: {obj.studentAge}</p>
                    <p> Gender: {obj.studentGender}</p>
                    <p> State: {obj.studentState}</p>
                    <p> L.G.A: {obj.studentLga}</p>
                    <p> Town: {obj.studentTown}</p>
                    <p> Place of Birth: {obj.studentPlaceOfBirth}</p>
                    <p> Religion: {obj.studentReligion}</p>
                    <p> Nationality: {obj.studentNationality}</p>
                    <p> Health History: {obj.studentHealthHistory}</p>
                    <p>Others: {obj.studentHealthHistoryExplained}</p>
                    
                </div>
              
                 <h3  className={styles.topicAdmin}>Sponsor's Data</h3>
                   <div className={styles.div}>
<img src={obj.sponsorPassport}  alt={'Sponsors passport'} className={styles.passport} />
         <p> Name: {obj.parentName}</p>
                    <p> Date of Birth: {obj.parentDob}</p>
                    <p> Age: {obj.parentAge}</p>
                    <p>State: {obj.parentState}</p>
                    <p>Religion: {obj.parentReligion}</p>
                    <p>Email: {obj.parentEmail}</p>
                    <p>Address: {obj.parentAddress}</p>
                    <p>Phone Number: {obj.parentPhoneNumber}</p>
                    <p>Relationship with ward: {obj.parentOccupation}</p>
                    <p>Occupation: {obj.studentName}</p>
  </div>
     <h3  className={styles.topicAdmin}>Academic Data</h3>
     <div className={styles.div}>
                    <p>Admission Class: {obj.admissionClass}</p>
                    <p>Primary school attended with date: {obj.primarySchoolWithDate}</p>
                    <p>Secondary school attended with date: {obj.secondarySchoolWithDate}</p>
                    <p>Last class : {obj.lastClass}</p>
                    <p>Reason for living: {obj.reasonForLiving}</p>

                    </div>   
    </div>
  )
}


return(
  <div>loading....</div>
)
}
export default myrecord

export async function getServerSideProps()  {

 await dbConnect()

    const result = await Student.find({})

    const data = JSON.parse(JSON.stringify(result))

  return{
      props:{
          data:data
      }
  }

}