
import './EntranceExams.css'

import image from '/JOB/job-project/public/NTA Logo.png'
import image1 from '/JOB/job-project/public/NTA Logo-1.png'
import image2 from '/JOB/job-project/public/CAT.png'

import image3 from '/JOB/job-project/public/NMAT.png'


const EntranceExams = () => {
  return (
    <>

      <div className='EntranceExams'>



        <div className="Entrance">

          <h1>Entrance Exams</h1>

          <div className="entrance-cont">

            <div className="entrance-cont-img">
              <img src={image} alt="" />
            </div>

            <div className="entrance-cont-content">
              <h3>JEE Main 2025</h3>
              <p>JEE Main is the national level undergraduate engineering entrance exam. This exam is acceptable for the admission in various B.Tech/B.E Programs</p>

              <a href="">view</a>
            </div>
          </div>

          {/* second */}

          <div className="entrance-cont">

            <div className="entrance-cont-img">
              <img src={image1} alt="" />
            </div>

            <div className="entrance-cont-content">
              <h3>Gate 2025</h3>
              <p>GATE 2024 is a national - level exam conducted for M,Tech admissions across India . The Scores are also accepted for PSU Recruitment</p>

              <a href="">view</a>
            </div>
          </div>

          {/* thierd */}

          <div className="entrance-cont">

            <div className="entrance-cont-img">
              <img src={image2} alt="" />
            </div>

            <div className="entrance-cont-content">
              <h3>CAT</h3>
              <p>GATE 2024 is a national - level exam conducted for M,Tech admissions across India . The Scores are also accepted for PSU Recruitment</p>

              <a href="">view</a>
            </div>
          </div>

          {/* Fourth */}
          <div className="entrance-cont">

            <div className="entrance-cont-img">
              <img src={image3} alt="" />
            </div>

            <div className="entrance-cont-content">
              <h3>NMAT</h3>
              <p>JEE Main is the national level undergraduate engineering entrance exam. This exam is acceptable for the admission in various B.Tech/B.E Programs</p>

              <a href="">view</a>
            </div>
          </div>

        </div>

      </div>


    </>
  )
}

export default EntranceExams