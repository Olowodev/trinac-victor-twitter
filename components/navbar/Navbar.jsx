import Button from "../button/Button";
import styles from './navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.navCont}>
                <div>
                    <img />
                </div>
                <div>
                    <p>About</p>
                </div>
                <div>
                    <p>Works<sup>5</sup></p>
                </div>
                <Button text='GO BACK' />
            </div>
        </div>
    );
}

export default Navbar;