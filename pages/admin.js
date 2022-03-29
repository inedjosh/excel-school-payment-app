import { Styles } from 'docx'
import React, {useState, useEffect} from 'react'
import { MdFormatLineSpacing } from 'react-icons/md';
import styles from  "./../styles/form.module.css";
import Router from 'next/router'


function admin() {



    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState('')
    const [success, setSuccess] = useState(null)

    const admin = {
        userName: 'admin001',
        password: 'admin098'
    }

    const handleLogin = (e) => {
        
        e.preventDefault()
       if(userName !== admin.userName || password !== admin.password ){
           setSuccess((MdFormatLineSpacing))
          setErr('Login details are not correct, check and retry!') 
       }else if(userName === admin.userName && password === admin.password){
           setErr('')
           setSuccess(true)
           sessionStorage.setItem('adminLogin', JSON.stringify('loggedIn'))
       }
    }

    useEffect(() => {
        if(success === true){
   Router.push('/studentdata')
        }
    }, [success])

  return (
    <form className={styles.container}>
    <h3  className={styles.topicAdmin}>Log in to access students record</h3>
    {
        err.length !== 0 && (<p style={{color:'red'}}>{err}</p>)
    }
    <div className={styles.inputDivAdmin}>
    <p>User Name</p>
    <input type="text" placeholder='username' className={styles.input} value={userName} onChange={e => setUserName(e.target.value)} />
</div>
<div className={styles.inputDivAdmin}>
    <p>Password</p>
    <input type="password" placeholder='password' className={styles.input} value={password} onChange={e => setPassword(e.target.value)} />
</div>
<div className={styles.btnDiv}>
    <input type='submit' className={styles.adminBtn} onClick={handleLogin} value='Login' />
</div>
    </form>
  )
}

export default admin

