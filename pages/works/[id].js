import Button from "../../components/button/Button";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../containers/footer/Footer";
import Works from "../../containers/work/Works";

const WorkPage = () => {
    return (
        <div>
            <div>
                <Navbar />
                <div>
                    <h1>JABBURR</h1>
                     <div>
                        <img />
                        <div>
                            <div>
                                <p>DESCRIPTION</p>
                                <p>Jabburr is an ecommerce platform focused on creating men suits and other clothing materials</p>
                            </div>
                            <div>
                                <p>DESCRIPTION</p>
                                <p>Jabburr is an ecommerce platform focused on creating men suits and other clothing materials</p>
                            </div>
                            <Button text='VIEW LIVE PROJECT' />
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <div>
                            <img />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img />
                        </div>
                    </div>
                </div>
                <div>
                    <p>The cool guys at jabburr reached out to us to help them build a web and mobile based application for their company operations.</p>
                    <div>
                        <p>WHAT WE DID</p>
                        <p>Ad in nulla eiusmod eiusmod. Est consectetur excepteur aute nostrud tempor eu sit aliquip velit aute minim deserunt nostrud. Sit ut occaecat anim ex laboris consequat nulla adipisicing. Ad adipisicing dolor elit irure ad aliqua est.</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img />
                    </div>
                    <p>Ea reprehenderit aute elit incididunt eiusmod aliqua qui voluptate velit quis consequat dolor minim ex. Elit nisi tempor aliquip laborum. Quis Lorem consequat exercitation occaecat veniam anim labore magna. Magna nostrud anim voluptate qui qui. Tempor ipsum Lorem laborum magna eiusmod in non esse. Irure elit in labore ipsum sunt sint consequat enim adipisicing. Incididunt ad commodo culpa consequat id in culpa.</p>
                </div>
                <div>
                    <div>
                        <div>
                        <img />
                        </div>
                    </div>
                </div>
                <Works />
                <Footer />
            </div>
        </div>
    );
}

export default WorkPage;