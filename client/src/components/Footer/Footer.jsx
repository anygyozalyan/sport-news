import React from 'react';
import styles from './Footer.module.css';
import footerImage from '../../assets/images/footer.png';
import insta from '../../assets/icons/instagram.png';
import twitter from '../../assets/icons/twitter.png';
import fb from '../../assets/icons/facebook.png';
import { BsArrowRight } from "react-icons/bs";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>

                <div className={styles.footer_left}>
                    <p className={styles.footer_title}>Newsletter Subscription</p>
                    <div className={styles.input_block}>
                        <input
                            type="text"
                            placeholder="Your email"
                            className={styles.footer_input}
                        />
                        <button className={styles.input_button}>
                            <p className={styles.mobile_text}>Subscribe</p>
                            <BsArrowRight className={styles.arrow} />

                        </button>
                    </div>
                </div>

                <div className={styles.footer_image_block}>
                    <img src={footerImage} alt="Sports player" />
                </div>
            </div>

            <div className={styles.icons_block}>
                <img src={fb} alt="Facebook" />
                <img src={insta} alt="Instagram" />
                <img src={twitter} alt="Twitter" />
            </div>
        </footer>
    );
}

export default Footer;