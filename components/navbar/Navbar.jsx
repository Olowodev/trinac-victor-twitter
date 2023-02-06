import Link from "next/link";
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
                    <a href='/#about'>About</a>
                </div>
                <div>
                    <Link href='/works'>Works<sup>5</sup></Link>
                </div>
                <Button text='GET IN TOUCH' />
            </div>
        </div>
    );
}

export default Navbar;