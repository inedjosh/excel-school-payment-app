import React, {useState, useEffect} from 'react'
import styles from  "./../styles/form.module.css";
import Router from 'next/router'
import Link from 'next/link'
import { dbConnect } from "../lib/mongodb";
import Student from '../model/studentModel'



function studentData({data}) {

   

const [accessCheck, setAccessCheck] = useState('')

 useEffect(() => {
     if(!sessionStorage.getItem('adminLogin')){
         setAccessCheck(false)
         Router.push('/admin') 
     }else{  
        setAccessCheck(true)
     }
 }, [accessCheck])

 

   if(accessCheck === false){
       return(
    <div className={styles.center}>Loading....</div>
)
   }
  return (
     <div className={styles.form}>
    <h3  className={styles.topicAdmin}>Students Form purchase record</h3>
    <div>
        {
            data.map(record => (
                <div key={record._id}>
                    <Link href={{
                        pathname: '/myrecord',
                        query: {id: record._id}
                    }}>
                       
                           <ul className={styles.list}>
                               <li  className={styles.listItem}>
                                   Name: <span className={styles.boldText}> {record.studentName}</span>
                                  
                               </li>
                               <li className={styles.listItem}>Email: <span className={styles.boldText}> {record.parentEmail}</span></li>
                               <li className={styles.listItem}>Phone Number: <span className={styles.boldText}> {record.parentPhoneNumber}</span></li>
                           </ul>
                    
                    </Link>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default studentData

export async function getServerSideProps()  {

     await dbConnect()

    const result = await Student.find({})
 console.log(result)
    const data = JSON.parse(JSON.stringify(result))
   
  return{
      props:{
          data:data
      }
  }
}