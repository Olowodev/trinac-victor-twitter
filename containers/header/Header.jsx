import Navbar from '../../components/navbar/Navbar';
import styles from './header.module.css'
import {FiArrowDown} from 'react-icons/fi'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.headerCont}>
                <Navbar />
                <div className={styles.headerContent}>
                    <div className={styles.hContentLeft}>
                        <h1>WE <span>BUILD</span> APPS YOUR USERS <span>LOVE</span></h1>
                        <div className={styles.downIcon}>
                            <FiArrowDown />
                        </div>
                    </div>
                    <div className={styles.hContentRight}>
                        <div className={styles.rightImage}>
                            <img src='./headerImg.jpg' />
                        </div>
                        <div className={styles.imageTitle}>
                            <div className={styles.hLine}></div>
                            <p>FOLIO/2023</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;