import React from 'react'
import styles from './page.module.css'
import {FaFacebook, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>Copy right 2023. All rights reserved</div>
        <div className={styles.social}>
          <FaFacebook className={styles.icon}/>
          <FaInstagram className={styles.icon}/>
          <FaTwitter className={styles.icon}/>
          <FaYoutube className={styles.icon}/>
        </div>
    </div>
  )
}

export default Footer