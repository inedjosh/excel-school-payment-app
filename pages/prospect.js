import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import { PaystackButton } from 'react-paystack'
import styles from './../styles/form.module.css'
import Head from 'next/head'
import Propectus from '../components/Propectus'
import {  Packer } from "docx";
import { saveAs } from "file-saver";
import Router from 'next/router'
import { useCookies } from "react-cookie"

function prospect() {

   const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [success, setSuccess] = useState(false)
      const [cookie, setCookie] = useCookies(["prospectusCheck"])

      //  setCookie("prospectusCheck", false)

  const componentProps = {
    email : email,
    amount : 517800,
    metadata: {
      studentName: name,
     
    },
    publicKey: 'pk_test_d74b9a28b8d8c20f686a6db6fa7e656238454016',
    text: "Pay Now!",
    onSuccess: () =>{
      let bool = {data: true}
      setSuccess(true)
      sessionStorage.setItem('check', JSON.stringify(bool))
    },
    onClose: () => alert("Are you sure you want to quit now ? "),
  }

   useEffect(() => {
  
   if(success === true ){
       Router.push('/ega')
   }
 });



  return (
    <div className={styles.formDiv}>
     <Head>
      
      <title>Form</title>
    </Head>
  <h2>Download School prospectus</h2>


      <div className={styles.topic}><p> To download/print the prospectus, you are expected to pay the sum of ₦5,178. Thanks</p></div>
       {/* {
        error && <p style={{paddingLeft: 20, color:'red'}}>Please fill in all input fields!</p>
      } */}
      <form className={styles.form}>
        <div className={styles.inputDiv}>
          <label>Full Name</label>
          <input type="text" value={name} required onChange={e => setName(e.target.value)} className={styles.input}/>
        </div>
        <div className={styles.inputDiv}>
          <label>Email</label>
          <input type="email" value={email} required onChange={e => setEmail(e.target.value)} className={styles.input} />
        </div>
        </form>
          <div className={styles.btnDiv}>
        <PaystackButton className="paystack-button" {...componentProps}  className={styles.paystackButton}/>
        </div>
    </div>

  )
}

export default prospect
