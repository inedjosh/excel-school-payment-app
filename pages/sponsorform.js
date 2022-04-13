import React, {useState, useEffect} from "react";
import Head from 'next/head'
import styles from './../styles/form.module.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from 'next/link'
import Router from 'next/router'
import { useCookies } from "react-cookie"
import isEmail from "validator/lib/isEmail";

function Form() {


  const [surname, setSurname] = useState('')
  const [otherNames, setOtherNames] = useState('')
  const [dob, setDob] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [state, setState] = useState('')
  const [nationality, setNationality] = useState('')
  const [religion, setReligion] = useState('christianity')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [relationship, setRelationship] = useState('')
  const [occupation, setOccupation] = useState('')
  const [status, setStatus] = useState('single')
  const [error, setError] = useState(null)
  const [redirect, setRedirect] = useState(false)

   const [cookie, setCookie] = useCookies(["parentData"])

 
  const handleNextButton = () => {
    if(surname.trim() === '' || otherNames.trim() === '' || dob.trim() === '' || age.trim() === '' || gender.trim()  === '' || state.trim() === '' || nationality.trim() === '' || religion.trim() === '' || address.trim() === '' || phone.trim() === '' || relationship.trim() === '' || occupation.trim() === '' || status.trim() === '' || !isEmail(email) ){
      setError(true);
      
    }else{
      setError(false)
      setRedirect(true)

        const data = {
        surname,
        otherNames,
        age,
        dob,
       gender,
       state,
       religion,
       address,
       phone,
       email,
       nationality,
       relationship,
       occupation,
       status
      }

     setCookie("parentData", JSON.stringify(data))

    }
  }


  useEffect(() => {
  
   if(redirect === true ){
       Router.push('/academicsform')
   }
 });

  return (
    <div className={styles.formDiv}>
      <Head>
     
      <title>Form</title>
    </Head>
      <h2>Admission form</h2>

    
      <div className={styles.topic}>SPONSOR'S DATA</div>
        {
        error && <p style={{paddingLeft: 20, color:'red'}}>Please fill in all input fields correctly!</p>
      }
      <form className={styles.form}>
        <div className={styles.inputDiv}>
          <label>Surname </label>
          <input type="text" value={surname} onChange={e => setSurname(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Other Names </label>
          <input type="text" value={otherNames} onChange={e => setOtherNames(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Date of Birth </label>
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Age </label>
          <input type="text" value={age} onChange={e => setAge(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Sex</label>
          <select id="gender" name="gender" value={gender} onChange={e => setGender(e.target.value)} className={styles.inputSpecial2}>
            <option selected value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.inputDiv}>
          <label>Marital Status</label>
          <select id="status" value={status} onChange={e => setStatus(e.target.value)} name="status" className={styles.inputSpecial2}>
            <option selected value="single">Single</option>
            <option value="married">Married</option>
            <option value="divorced">Divorced</option>
          </select>
        </div>
        <div className={styles.inputDiv}>
          <label>Occupation </label>
          <input type="text" value={occupation} onChange={e => setOccupation(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Relationship with Applicant </label>
          <input type="text" value={relationship} onChange={e => setRelationship(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Contact Address </label>
          <input type="text" value={address} onChange={e => setAddress(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Email Address </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value.trim())} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Phone No(s)</label>
          <input type="number" value={phone} onChange={e => setPhone(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Religion</label>
          <select id="religion" name="religion" value={religion} onChange={e => setReligion(e.target.value)} className={styles.inputSpecial2}>
            <option selected value="christianity">Christianity</option>
            <option value="islam">Islam</option>
            <option value="others">Other Religion</option>
          </select>
        </div>

        <div className={styles.inputDiv}>
          <label>State of Origin</label>
          <input value={state} onChange={e => setState(e.target.value)} type="text" className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Nationality</label>
          <input value={nationality} onChange={e => setNationality(e.target.value)} type="text" className={styles.input} />
        </div>
      </form>
    
      <div className={styles.btnDiv}>
     
        <button type='submit' onClick={handleNextButton} className={styles.payBtn}>NEXT &#8594;</button>
  
      </div>
    </div>
  );
}

export default Form;
