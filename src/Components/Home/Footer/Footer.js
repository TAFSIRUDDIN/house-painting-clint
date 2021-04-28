import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        {name: "Floor painting" , link: "/emergency"},
        {name: "floor repairing" , link: "/checkup"},
        {name: "House repairing" , link: "/personal-treatment"},
        {name: "Building Repairing" , link: "/tooth-extract"},
        {name: "Sequrity Inspection" , link: "/checkup"},
    ]
    const ourAddress = [
        {name: "Bangladesh" , link: "//google.com/map"},
        {name: "Khulna" , link: "//google.com/map"},
       
    ]
    const oralHealth = [
        {name: "Interior design" , link: "/emergency"},
        {name: "Furneture repairing" , link: "/checkup"},
        {name: "House repairing" , link: "/personal-treatment"},
        {name: "Sequrity Inspection" , link: "/tooth-extract"},
        {name: "Door mechanics" , link: "/checkup"},
        {name: "Interior design" , link: "/checkup"},
        {name: "Door mechanics" , link: "/checkup"}
    ]
    const services = [
        {name: "Sequrity Inspection" , link: "/emergency"},
        {name: "House repair" , link: "/checkup"},
        {name: "Old Wall repair" , link: "/personal-treatment"},
        {name: "Door repair" , link: "/tooth-extract"},
        {name: "Old house repair" , link: "/checkup"},
        {name: "House repair" , link: "/checkup"},
        {name: "Table repair" , link: "/checkup"}
    ]
    return (
        <footer style={{textColor: 'white'}} className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Service"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Oral Health" menuItems={oralHealth}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"></a></li>
                            <li className="list-inline-item"><a href="//google.com"></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-primary">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;