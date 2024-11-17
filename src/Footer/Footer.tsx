

import './Footer.css'
import image from '/JOB/job-project/public/Logo.png'

import image1 from '/JOB/job-project/public/Frame 147-X.png'

import image2 from '/JOB/job-project/public/skill-icons_instagram.png'
import image3 from '/JOB/job-project/public/Frame 149-Y.png'

import image4 from '/JOB/job-project/public/Frame 150-in.png'



const Footer = () => {
    return (
        <>

        <div className="footer-container">

            <div className="footer">

                <div>

                    <div>
                        <img src={image} alt="" />
                    </div>

                    <div className='footer-icon'>

                        <a href=""> <img src={image1} alt="" className='footer-icon-1' /></a>
                        <a href=""><img src={image2} alt="" /></a>
                        <a href=""><img src={image3} alt="" /></a>
                        <a href=""><img src={image4} alt="" /></a>
                    </div>
                </div>


                <div className="footer-cont">

                    <h3>Popular Courses</h3>

                    <p>B.Tech</p>
                    <p>MBBS</p>
                    <p>BA.LLB</p>
                    <p>MBA</p>
                    <p>Pharmacy</p>
                    <p>Psychology</p>
                    <p>VFX</p>
                </div>

                {/* second */}


                <div className="footer-cont">

                    <h3>Most Searched Colleges</h3>

                    <p>IIT Bombay</p>
                    <p>IIM Ahmedabad</p>
                    <p>IISc Bangalore</p>
                    <p>JNTU</p>
                    <p>Osmania University</p>
                    <p>Andhra University</p>

                </div>

                {/* third */}


                <div className="footer-cont">

                    <h3>Quick Links</h3>

                    <p>About Us</p>
                    <p>Contact Us</p>
                    <p>Careers</p>
                    <p>Support</p>

                </div>

                {/* fourth */}

                <div className="footer-cont">

                    <h3>Terms&Conditions</h3>

                    <p>Privacy Policy</p>
                    <p>Copyright notice</p>
                    <p>Business License</p>

                </div>
            </div>

            <div className='hr'>
                <hr className='hr-line' />
            </div>

            <div className='footer-last'>
                <p>All Copyright © 2024 CollegePur. All Rights Reserved.</p>
            </div>

            </div>
        </>
    )
}

export default Footer