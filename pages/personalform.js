import React, {useState, useEffect} from "react";
import Head from 'next/head'
import styles from './../styles/form.module.css'
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import Link from 'next/link'
import Router from 'next/router'
import { useCookies } from "react-cookie"

function Form() {

 
  const [surname, setSurname] = useState('')
  const [otherNames, setOtherNames] = useState('')
  const [dob, setDob] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('male')
  const [placeOfBirth, setPlaceOfBirth] = useState('')
  const [town, setTown] = useState('')
  const [lga, setLga] = useState('')
  const [state, setState] = useState('')
  const [nationality, setNationality] = useState('')
  const [religion, setReligion] = useState('christianity')
  const [healthHistory, setHealthHistory] = useState('yes')
  const [others, setOthers] = useState('')
  const [error, setError] = useState(null)
  const [redirect, setRedirect] = useState(false)

    const [cookie, setCookie] = useCookies(["studentData"])



 
  const handleNextButton = () => {
    if(surname.trim() === '' || otherNames.trim() === '' || dob.trim() === '' || age.trim() === '' || gender.trim()  === '' || placeOfBirth.trim() === '' || town.trim() === '' || lga.trim() === '' || state.trim() === '' || nationality.trim() === '' || healthHistory.trim() === ''){
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
       placeOfBirth,
       town,
       lga,
       state,
       nationality,
       religion,
       healthHistory,
       others
      }

     setCookie("studentData", JSON.stringify(data))
    }
  }

  useEffect(() => {
  
   if(redirect === true ){
       Router.push('/sponsorform')
   }
 });

  return (
    <div className={styles.formDiv}>
      <Head>
       <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
      <title>Form</title>
    </Head>
      <h2>Admission form</h2>

      <div className={styles.topic}>PERSONAL DATA</div>
      {
        error && <p style={{paddingLeft: 20, color:'red'}}>Please fill in all input fields!</p>
      }
      <form className={styles.form}>
        <div className={styles.inputDiv}>
          <label>Surname</label>
          <input type="text" value={surname} onChange={e => setSurname(e.target.value)} className={styles.input} />
        </div>

        <div className={styles.inputDiv}>
          <label>Other Names</label>
          <input type="text" value={otherNames} onChange={e => setOtherNames(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Date of Birth</label>
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} className={styles.inputSpecial} />
        </div>
        <div className={styles.inputDiv}>
          <label>Age Next Birthday</label>
          <input type="text" value={age} onChange={e => setAge(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Sex</label>
          <select id="gender" name="gender" value={gender} onChange={e => setGender(e.target.value)}  className={styles.inputSpecial2}>
            <option selected value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className={styles.inputDiv}>
          <label>Place of Birth</label>
          <input type="text" value={placeOfBirth} onChange={e => setPlaceOfBirth(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Town</label>
          <input type="text" value={town} onChange={e => setTown(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>LGA</label>
          <input type="text" value={lga} onChange={e => setLga(e.target.value)}className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>State of Origin</label>
          <input type="text" value={state} onChange={e => setState(e.target.value)} className={styles.input} />
        </div>
        <div className={styles.inputDiv}>
          <label>Nationality</label>
          <input type="text" value={nationality} onChange={e => setNationality(e.target.value)}className={styles.input} />
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
          <label>Health History: Handicap</label>
          <select id="healthHistory" name="healthHistory" value={healthHistory} onChange={e => setHealthHistory(e.target.value)} className={styles.inputSpecial2}>
            <option selected value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className={styles.inputDiv}>
          <label>Others</label>
          <input type="text" value={others} onChange={e => setOthers(e.target.value)} className={styles.input} />
        </div>
      </form>
     
      <div className={styles.btnDiv}>
    
        <button type='submit' onClick={handleNextButton} className={styles.payBtn}>NEXT &#8594;</button>
    
      </div>
    </div>
  );
}

export default Form;
