
import image1 from '/JOB/job-project/public/Rectangle 161.png'
import image2 from '/JOB/job-project/public/Logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {   faUser} from '@fortawesome/free-solid-svg-icons'
import {   faBars} from '@fortawesome/free-solid-svg-icons'


import './Nav.css'

const Nav = () => {
    return (
        <>

            <div className="container">
                <div className="nav-cont-1">

                    <img src={image1} alt="" />
                    <img src={image2} alt="" />

                </div>

                <div className="nav-cont-2">

                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Colleges</a>
                    <a href="">Exams</a>
                    <a href="">Blog</a>
                    <a href="">Contact</a>
                </div>

                <div className="nav-cont-3">

                <FontAwesomeIcon icon={faMagnifyingGlass} className='icon' />

                <FontAwesomeIcon icon={faUser} className='icon' />
                <FontAwesomeIcon icon={faBars} className='icon' />


                </div>



            </div>
        </>
    )
}

export default Nav