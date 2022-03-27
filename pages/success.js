import React from 'react'
import Image from 'next/image'
import thankYou from './../images/thankyou.svg'
import styles from  "./../styles/app.module.css";
import Link from 'next/link'

function success() {
  return (
    <div className={styles.successDiv}>

  <Image 
      src={thankYou}
      alt='backgroundImage'
        width={250}
        height={250}
      />

      <h1>Thank You!</h1>
      <p>Your payment has been received and your data has been recorded! Your receipt for payment has been sent to your mail, that will be your proof of payment.</p>
      <Link href='/'>Go back home</Link>
    </div>
  )
}

export default success