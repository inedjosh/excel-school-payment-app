import React, {useState, useEffect} from 'react'
import {prisma} from './api/register'
import styles from  "./../styles/form.module.css";
import Router from 'next/router'
import Link from 'next/link'


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
                <div key={record.id}>
                    <Link href={{
                        pathname: '/myrecord',
                        query: {id: record.id}
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
    

  const studentData = await prisma.studentRegistration.findMany()

  return{
      props:{
          data:studentData
      }
  }

}