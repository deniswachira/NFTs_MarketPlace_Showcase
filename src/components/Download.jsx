import React from 'react'
import styles from '../styles/Global'
import assets from '../assets'

const Download = () => {
  return (
    <div className={`${styles.section} ${styles.bgWhite}`}>
      <div className={`${styles.subSection} flex-col text-center`}>
            <div>
              <h1 className={`${styles.h1Text} ${styles.blackText}`}>Download the APK file</h1>
              <button className={styles.btnPrimary}>  <a href="https://expo.dev/artifacts/267aa632-6394-42fd-8cb7-82106d329cc4">Download APK</a></button>
              <h1 className={`${styles.pText} ${styles.blackText}`}>Get the full source code on GitHub</h1>
            </div>
            <button className={styles.btnPrimary}><a href="https://github.com/deniswachira/NFT_Marketplace_MobileApp">Source Code</a></button>
            <div className={styles.flexCenter}>
              <img  src={assets.scene} alt="download_png" className={styles.fullImg}/>
            </div>
        </div>  
    </div>
  )
}

export default Download