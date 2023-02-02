import Navbar from '../../components/navbar/Navbar';
import styles from './header.module.css'
import {FiArrowDown} from 'react-icons/fi'
import { Title } from '../../components/intro/Intro';
import { useEffect, useRef, useState } from 'react';

const Header = ({setOffset}) => {
    const ref = useRef()
    
    useEffect(()=> {
        const h1 = ref.current
        setOffset({
            top: h1.offsetTop,
            left: h1.offsetLeft
        })
    }, [])
    return (
        <div className={styles.header}>
            <div className={styles.headerCont}>
                <Navbar />
                <div className={styles.headerContent}>
                    <div className={styles.hContentLeft}>
                        <h1 ref={ref}>WE <span>BUILD</span> APPS YOUR USERS <span>LOVE</span></h1>
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