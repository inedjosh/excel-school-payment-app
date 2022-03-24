import Link from 'next/link'
import Head from 'next/head'
import React, {useState} from 'react'
import styles from  "./../styles/app.module.css";
import background from "./../images/background-3.jpg";
import logo from "./../images/logo-wide.png";
import Image from 'next/image'
import {
  GrFacebookOption,
  GrTwitter,
  GrInstagram,
  GrClose,
} from "react-icons/gr";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

function Home() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleMobileNav = () => {
    setMobileNav(!mobileNav);
  };

  const MobileShown = (
    <motion.div
      className={styles.mobileShown}
      animate={mobileNav ? {   y: 0 }: {y:1000}}
      initial={{y: 1000 }}
      transition={{
        delay: 0.1,
        duration: 0.5,
      }}
    >
      <Link href='/prospect' className={styles.mobileLink}  target='_blank'>View Prospect</Link>
      <a className={styles.mobileLink}  href='https://www.excelgraceacademy.com' target='_blank'>School Details</a>
      <div className={styles.mobileIconDiv}>
        <a href="https://facebook.com" target="_blank">
          <GrFacebookOption className={styles.iconMobile} />
        </a>
        <a href="https://twitter.com" target="_blank">
          <GrTwitter className={styles.iconMobile} />
        </a>
        <a href="https://instagram.com" target="_blank">
          <GrInstagram className={styles.iconMobile} />
        </a>
      </div>
    </motion.div>
  );

  return (
    <div className={styles.home}>
    <div className={styles.overlay}></div>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet" />
      <title>Home</title>
    </Head>
      
    
      <div className={styles.container}>
        <div className={styles.mobileHeader} onClick={handleMobileNav}>
          {!mobileNav ? (
            <HiOutlineMenuAlt3 style={{ fontSize: 20 }} />
          ) : (
            <GrClose />
          )}
        </div>
        <div>{ MobileShown }</div>
        <div className={styles.header}>
          <div className={styles.alignRight}>
            <motion.nav
              className={styles.nav}
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{
                delay: 0.2,
                duration: 2,
                stiffness: 200,
                type: "spring",
              }}
            >
              <Link href="/prospect" className={styles.link}>
               
                 <a className={styles.link}>
               View Prospect
              </a>
              </Link>
              <a  href='https://www.excelgraceacademy.com' target='_blank' className={styles.link}>
               School Details
              </a>
            </motion.nav>
          </div>
          <div className={styles.alignLeft}>
            <motion.div
              className={styles.socialMedia}
              animate={{ y: 0 }}
              initial={{ y: -100 }}
              transition={{
                delay: 0.2,
                duration: 2,
                stiffness: 200,
                type: "spring",
              }}
            >
              <a href="https://facebook.com" target="_blank">
                <GrFacebookOption className={styles.icon} />
              </a>
              <a href="https://twitter.com" target="_blank">
                <GrTwitter className={styles.icon} />
              </a>
              <a href="https://instagram.com" target="_blank">
                <GrInstagram className={styles.icon} />
              </a>
            </motion.div>
          </div>
        </div>
        <div className={styles.logo}>
        <motion.div  initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, type: "fade", duration: 2 }}>
          <Image
            src={logo}
            alt="logo "
            className={styles.logoImg}
           
          />
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{
              delay: 2,
              type: "spring",
              duration: 2,
              stiffness: 250,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <h1>Welcome to Excelgrace Academy Gboko</h1>
            <p>The school for the child you love...</p>
          </motion.div>
          <Link href="/personalform">
            <motion.button
              type="button"
              className={styles.button}
              animate={{ y: 0 }}
              initial={{ y: 300 }}
              transition={{
                delay: 0.4,
                duration: 4,
                stiffness: 200,
                type: "spring",
              }}
            >
              Register Now &#8594;
            </motion.button>
          </Link>
        </div>
        <p className={styles.footer}>Designed by beam studious</p>
      </div>
    </div>
  );
}

export default Home;
