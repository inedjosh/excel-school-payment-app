import React, {useState, useEffect} from 'react'
import styles from  "./../styles/form.module.css";
import Router from 'next/router'
import Link from 'next/link'
import { dbConnect } from "../lib/mongodb";
import Student from './../model/studentModel'



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
                                   {record.id} {record.studentName}
                               </li>
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

export async function getStaticProps()  {

     await dbConnect()

    const result = await Student.find()

    const data = JSON.parse(JSON.stringify(result))

  return{
      props:{
          data:data
      }
  }

}