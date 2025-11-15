import React from 'react'
import styles from '../footer.module.css'

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className="row">
            <div className={styles.footerTopWrapper}>
                <div className="footer__block">
                    <div className={styles.footerLinkTitle}>
                        Actions
                    </div>
                    <div className={styles['footer__link--wrapper']}>
                        <div className="footer__link">
                            Summarists Magazine
                        </div>
                        <div className="footer__link">
                            Cancel Subscription
                        </div>
                        <div className="footer__link">
                            Help
                        </div>
                        <div className="footer__link">
                            Contact us
                        </div>
                    </div>
                </div>
                <div className="footer__block">
                    <div className={styles.footerLinkTitle}>
                        Useful Links
                    </div>
                    <div className="footer__link--wrapper">
                        <div className="footer__link">
                            Pricing
                        </div>
                        <div className="footer__link">
                            Summarist Business
                        </div>
                        <div className="footer__link">
                            Gift Cards
                        </div>
                        <div className="footer__link">
                            Authors & Publishers
                        </div>
                    </div>
                </div>
                <div className="footer__block">
                    <div className={styles.footerLinkTitle}>
                        Company
                    </div>
                    <div className="footer__link--wrapper">
                        <div className="footer__link">
                            About
                        </div>
                        <div className="footer__link">
                            Careers
                        </div>
                        <div className="footer__link">
                            Partners
                        </div>
                        <div className="footer__link">
                            Code of Conduct
                        </div>
                    </div>
                </div>
                <div className="footer__block">
                    <div className={styles.footerLinkTitle}>
                        Other
                    </div>
                    <div className="footer__link--wrapper">
                        <div className="footer__link">
                            Sitemap
                        </div>
                        <div className="footer__link">
                            Legal Notice
                        </div>
                        <div className="footer__link">
                            Terms of Service
                        </div>
                        <div className="footer__link">
                            Privacy Policies
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerCopyrightWrapper}>
                <div className="footer__copyright">
                    Copyright &copy; 2023 Summarist.
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
