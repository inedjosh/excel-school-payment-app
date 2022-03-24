import React, {useState} from 'react'
import Link from 'next/link'
import { PaystackButton } from 'react-paystack'
import styles from './../styles/form.module.css'
import Head from 'next/head'

function prospect() {

   const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const componentProps = {
    email : email,
    amount : 200000,
    metadata: {
      studentName: name,
     
    },
    publicKey: 'pk_test_d74b9a28b8d8c20f686a6db6fa7e656238454016',
    text: "Pay Now!",
    onSuccess: () =>{saveDataOnDb();
      setSuccess(true)
    },
    onClose: () => alert("Are you sure you want to quit now ? "),
  }

  return (
    <div className={styles.formDiv}>
     <Head>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
      <title>Form</title>
    </Head>
  <h2>Download School prospectus</h2>


      <div className={styles.topic}><p>To download the prospect, your'e expected to pay a non-refundable sum of ₦2,000</p></div>
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
