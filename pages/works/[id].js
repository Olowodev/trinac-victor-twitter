import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import Works from "../../containers/work/Works";
import styles from '../../styles/work.module.css'

const WorkPage = () => {
    return (
        <div className={styles.WorkPage}>
            <div className={styles.wCont}>
                <div className={styles.header}>
                <Navbar />
                <div className={styles.head}>
                    <div className={styles.imgWrapper}>
                        <div className={styles.imgInner}>
                            <img src='/jabburr.jpg' />
                        </div>
                    </div>
                    <h1>JABBURR</h1>
                    <div className={styles.headRight}>
                        <div className={styles.headContent}>
                            <p>DESCRIPTION</p>
                            <p>Jabburr is an ecommerce platform focused on creating men suits and other clothing materials</p>
                        </div>
                        <div className={styles.headContent}>
                            <p>ROLES</p>
                            <p>Front-end development</p>
                            <p>Back-end development</p>
                            <p>DevOps/Cloud</p>
                        </div>
                        <Button style={{ alignSelf: 'flex-start', }} text='VIEW LIVE PROJECT' />
                    </div>
                </div>
                </div>
                <div className={styles.firstGallery}>
                    <div className={styles.gImgWrapper}>
                        <div>
                            <img src="/jabburr1.jpeg" />
                        </div>
                    </div>
                    <div className={styles.gImgWrapper}>
                        <div>
                            <img src="/jabburr2.jpg" />
                        </div>
                    </div>

                </div>
                <div className={styles.moreInfo}>
                    <p className={styles.leftInfo}>The cool guys at jabburr reached out to us to help them build a web and mobile based application for their company operations.</p>
                    <div>
                        <p>WHAT WE DID</p>
                        <p>Ad in nulla eiusmod eiusmod. Est consectetur excepteur aute nostrud tempor eu sit aliquip velit aute minim deserunt nostrud. Sit ut occaecat anim ex laboris consequat nulla adipisicing. Ad adipisicing dolor elit irure ad aliqua est. Dolor eiusmod dolor id tempor nisi adipisicing id sint anim reprehenderit exercitation sit est. Irure qui ad exercitation in esse irure proident est velit. Sunt ut nostrud incididunt labore do. Incididunt quis non eu nisi esse sunt commodo qui consequat. Adipisicing id nulla dolore esse quis aute elit amet. Exercitation qui dolor anim elit quis aliquip do dolor ipsum sint exercitation consectetur.</p>
                    </div>
                </div>
                <div className={styles.secondGallery}>
                    <div>
                        <img src="/jabburr3.jpg" />
                    </div>
                    <p>Ea reprehenderit aute elit incididunt eiusmod aliqua qui voluptate velit quis consequat dolor minim ex. Elit nisi tempor aliquip laborum. Quis Lorem consequat exercitation occaecat veniam anim labore magna. Magna nostrud anim voluptate qui qui. Tempor ipsum Lorem laborum magna eiusmod in non esse. Irure elit in labore ipsum sunt sint consequat enim adipisicing. Incididunt ad commodo culpa consequat id in culpa.</p>
                </div>
                <div className={styles.thirdGallery}>
                    <div className={styles.gImgWrapper}>
                        <div className={styles.gImgInner}>
                            <img src="/jabburr4.jpg" />
                        </div>
                    </div>
                </div>
                <Works />
                <div className={styles.footer}>

                <Footer />
                </div>
            </div>
        </div>
    );
}

export default WorkPage;