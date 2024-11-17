
import'./Main.css'

import image1 from '/JOB/job-project/public/Group 75.png'
import image2 from '/JOB/job-project/public/Group.png'
const Main = () => {
  return (
    <>

    <div className="main-cont">

        <div className="main-cont-1">

            <h1 className='main-cont-1-h1'>COLLEGEPUR</h1>

            <h1 className='main-cont-1-h2'>Guiding Futures, Shaping Success</h1>

        </div>

        <div className="main-cont-2">

            <div className='main-cont-2-1'>
                <img src={image1} alt="" />

                <p>Search for Colleges, exams and more...</p>
            </div>
            <div>
                <img src={image2} alt="" className='main-cont-2-img' />
            </div>
        </div>


    </div>
    </>
  )
}

export default Main