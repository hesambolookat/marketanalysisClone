import React from 'react';
import styles from './styles.module.css'; 
import logo from '../../assets/logo.svg'; 
import linkedinIcon from '../../assets/linkedin.svg';
import emailIcon from '../../assets/contactus.svg'; 

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.sections}>
            <div className={styles.sectionInfo}> 
                <div className={`${styles.sectionDesc} ${styles.sectionInfo_item}`}>
                    <div className={styles.logoCont}>
                        <img src={logo} alt="Logo" loading="lazy" decoding="async"  className={styles.logo} />
                    </div>
                    <p className={styles.description}>
                    Track market trends and manage your workflow across all your business systems with NEW continuously analyzing the market data for what matters to every business. Start with NEW now!
                    </p>
                </div>

                <div className={`${styles.pages} ${styles.sectionInfo_item}`}>
                    <h3>Pages</h3>
                    <div className={styles.links}>
                        <li><a href="https://www.new-marketanalysis.com/faqs">FAQs</a></li>
                        <li><a href="https://www.new-marketanalysis.com/about-us">About us</a></li>
                        <li><a href="https://www.new-marketanalysis.com/terms-conditions">Terms & Conditions</a></li>
                    </div>
                </div>

                <div className={`${styles.contactUs} ${styles.sectionInfo_item}`}>
                    <h3>Contact us</h3>
                    <div className={styles.icons}>
                        <a href="https://www.linkedin.com">
                            <img src={linkedinIcon} alt="LinkedIn"  loading="lazy" decoding="async" className={styles.icon} />
                        </a>
                        <a href="mailto:info@example.com">
                            <img src={emailIcon} alt="Email" loading="lazy" decoding="async" className={styles.icon} />
                        </a>
                    </div>
                    
                </div>

            </div>
            <div className={styles.sectionEnd}>
                <p>
                    All Rights Reserved
                </p>
            </div>  
        </div> 

    </footer>
  );
};

export default Footer;
