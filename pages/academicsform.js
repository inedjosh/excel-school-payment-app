import React, {useState, useEffect} from "react";
import Head from 'next/head'
import styles from './../styles/form.module.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from 'next/link'
import { PaystackButton } from 'react-paystack'
import { parseCookies} from './../helpers/index'
import Router from 'next/router'
import Axios from 'axios'

function Form({data}) {

  const [admissionClass, setAdmissionClass] = useState('')
  const [primarySchoolDate, setPrimarySchoolDate] = useState('')
  const [secondarySchoolDate, setSecondarySchoolDate] = useState('')
  const [lastClass, setLastClass] = useState('')
  const [reason, setReason] = useState('')
   const [error, setError] = useState(null)
   const [success, setSuccess] = useState(false)
   const [sponsorImage, setSponsorImage] = useState(null);
   const [studentImage, setStudentImage] = useState(null);
  const [studentImageUrl, setStudentImageUrl] = useState(null)
  const [sponsorImageUrl, setSponsorImageUrl] = useState(null)
  const [btnPress, setBtnPress] = useState(false)
  

  // const uploadImage = (files) => {
  //   console.log(files[0])
   
  //   form
  // }

  const handleStudentImageSelect = (e) => {
    const image = e.target.files[0]
    console.log(image.size)
    if(image.size > 50000){
      setStudentImage('')
      alert('Image size to large, image should not exceed 5mb')
    }else{
  setStudentImage(image)
    }
  
  }

  const handleSponsorImageSelect = (e) => {
     const image = e.target.files[0]
    if(image.size > 50000){
      setSponsorImage('')
      alert('Image size to large, image should not exceed 5mb')
    }else{
  setSponsorImage(image)
    }
  
  }


  const handleSubmitButton = async () => {
    if(admissionClass.trim() === '' || lastClass.trim() === '' ||  reason.trim() === '' ){
      setError(true)
      setImageUploaded(false)
      
    }else{
      setError(false)
setBtnPress(true)
 const formDataOne = new FormData();
 const formDataTwo = new FormData();
 formDataOne.append('file', studentImage)
 formDataOne.append('upload_preset', 'eag-passport')
 formDataTwo.append('file', sponsorImage)
 formDataTwo.append('upload_preset', 'eag-passport')



     const dataOne = await fetch('https://api.cloudinary.com/v1_1/beam-innovations/image/upload', {
       method: 'POST',
       body: formDataOne
     }).then((response) => {
       setBtnPress(false)
      return response.json()

     })
     const dataTwo = await fetch('https://api.cloudinary.com/v1_1/beam-innovations/image/upload', {
       method: 'POST',
       body: formDataTwo
     }).then((response) => {
       setBtnPress(false)
      return response.json()

     })
     
 setBtnPress(false)
setStudentImageUrl(dataOne?.secure_url)
setSponsorImageUrl(dataTwo?.secure_url)

  }
  }

  const parentData = JSON.parse(data.parentData)
  const studentData = JSON.parse(data.studentData)
console.log(parentData)
console.log(studentData)
  const componentProps = {
    email : parentData.email,
    amount : 200000,
    metadata: {
      studentName: studentData.surname + studentData.otherNames,
      parentName : parentData.surname + parentData.otherNames,
      phone: parentData.phone,
    },
    publicKey: 'pk_test_d74b9a28b8d8c20f686a6db6fa7e656238454016',
    text: "Pay Now!",
    onSuccess: () =>{saveDataOnDb();
      setSuccess(true)
    },
    onClose: () => alert("Are you sure you want to quit now ? "),
  }

    useEffect(() => {
  
   if(success === true ){
       Router.push('/success')
   }
 });

  const saveDataOnDb = async ()  => {
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({
         studentName : studentData.surname + " " + studentData.otherNames,
  studentAge : studentData.age,
  studentDob : studentData.dob,
  studentGender : studentData.gender,
  studentState : studentData.state,
  studentLga : studentData.lga,
  studentTown : studentData.town,
  studentPlaceOfBirth : studentData.placeOfBirth,
  studentReligion : studentData.religion,
  studentNationality : studentData.nationality,
  studentHealthHistory : studentData.healthHistory,
  studentHealthHistoryExplained : studentData.others,
  parentName : parentData.surname + " " + parentData.otherNames,
  parentAge : parentData.age,
  parentDob : parentData.dob,
  parentState : parentData.state,
  parentReligion : parentData.religion,
  parentEmail : parentData.email,
  parentAddress : parentData.address,
  parentPhoneNumber : parentData.phone,
  parentRelationshipWithWard : parentData.relationship,
  parentOccupation : parentData.occupation,
  parentNationality : parentData.nationality,
  admissionClass : admissionClass,
  primarySchoolWithDate : primarySchoolDate,
  secondarySchoolWithDate : secondarySchoolDate,
  lastClass : lastClass,
  reasonForLiving : reason,
  studentPassport: studentImageUrl,
  sponsorPassport: sponsorImageUrl
      })
    })

    if(!response.ok){
      const error = await response.json()
      console.log(error)
    }

    const resData = await response.json()
    console.log(resData)

    return await response.json
  }



  return (
    <div className={styles.formDiv}>
      <Head>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
      <title>Form</title>
    </Head>
      <h2>Admission form</h2>

      <div className={styles.topic}>ACADEMICS</div>
       {
        error && <p style={{paddingLeft: 20, color:'red'}}>Please fill in all input fields!</p>
      }
      <form className={styles.form}>
        <div className={styles.inputDiv}>
          <label>Class Admission is Sought</label>
          <input type="text" value={admissionClass} onChange={e => setAdmissionClass(e.target.value)} className={styles.input}/>
        </div>
        <div className={styles.inputDiv}>
          <label>Primary School Attended with date</label>
          <input type="text" value={primarySchoolDate} onChange={e => setPrimarySchoolDate(e.target.value)} className={styles.input} />
        </div>
      
        <div className={styles.inputDiv}>
          <label>Secondary School Attended with Date</label>
          <input type="text" value={secondarySchoolDate} onChange={e => setSecondarySchoolDate(e.target.value)}  className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Last Class Attended</label>
          <input  type="text" value={lastClass} onChange={e => setLastClass(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Reason for Leaving Former your School</label>
          <input  type="text" value={reason} onChange={e => setReason(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>upload your passport (students passport)</label>
           <input type="file" name="myImage"  onChange={e => handleStudentImageSelect(e)} />
        </div>
        <div className={styles.inputDiv}>
          <label>upload your passport (sponsors passport)</label>
           <input type="file" name="myImage"  onChange={e => handleSponsorImageSelect(e)} />
        </div>
      </form>
      <div className={styles.btnDiv}>
      {

      studentImageUrl === null || '' && sponsorImageUrl === null || '' ? 
        <button type='submit' onClick={handleSubmitButton} className={styles.payBtn}>{btnPress ? "Finishing..." : "FINISH"} </button>
      :
         <PaystackButton className="paystack-button" {...componentProps}  className={styles.paystackButton}/> }
      </div>
    </div>
  );
      }

Form.getInitialProps = ({req}) => {
  const cookies = parseCookies(req)

  return{
    data: cookies
  }
}

export default Form;
