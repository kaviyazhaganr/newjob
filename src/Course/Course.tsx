
import './Course.css'

import image from '/JOB/job-project/public/ep_right.png'

const Course = () => {
    return (

        <>

            <div className='course'>

                <div className='course-head'>
                    <h1>Explore Courses</h1>
                </div>

                <div className="course-anchor-cont">

                    <a href="" className='course-anchor'>Bachelors</a>
                    <a href="" className='course-anchor'>Masters</a>
                    <a href="" className='course-anchor'>Doctorate</a>
                    <a href="" className='course-anchor'>Diploma</a>
                    <a href="" className='course-anchor'>Certification</a>
                </div>


                <div className="course-container">

                    <div className="course-cont-flex">


                        <div className="course-cont-head">
                            <h3>BCA General</h3>

                            <div className='course-cont-1'>
                                <p className='course-cont-p-1'>Duration</p>

                                <p className='course-cont-p-2'> 3 year</p>

                            </div>
                            <div className='course-cont-2'>
                                <p className='course-cont-p-1'>Avg. Fees</p>

                                <p className='course-cont-p-2'>68.26 k</p>

                            </div>
                            <div className='course-cont-3'>
                                <p className='course-cont-p-1'>Colleges</p>

                                <p className='course-cont-p-2'> 6678</p>

                            </div>

                            <hr />

                            <div className='course-cont-4'>
                                <p className='course-cont-p-4-1'>Course view</p>

                                <img src={image} alt="" />

                            </div>

                        </div>

                    </div>

                    {/* second */}


                    <div className="course-cont-flex">


                        <div className="course-cont-head">
                            <h3>BCA General</h3>

                            <div className='course-cont-1'>
                                <p className='course-cont-p-1'>Duration</p>

                                <p className='course-cont-p-2'> 3 year</p>

                            </div>
                            <div className='course-cont-2'>
                                <p className='course-cont-p-1'>Avg. Fees</p>

                                <p className='course-cont-p-2'>1.45L</p>

                            </div>
                            <div className='course-cont-3'>
                                <p className='course-cont-p-1'>Colleges</p>

                                <p className='course-cont-p-2'> 5119</p>

                            </div>

                            <hr />

                            <div className='course-cont-4'>
                                <p className='course-cont-p-4-1'>Course view</p>

                                <img src={image} alt="" />

                            </div>

                        </div>

                    </div>

                    {/* Third */}


                    <div className="course-cont-flex">


                        <div className="course-cont-head">
                            <h3>BCA General</h3>

                            <div className='course-cont-1'>
                                <p className='course-cont-p-1'>Duration</p>

                                <p className='course-cont-p-2'> 3 year</p>

                            </div>
                            <div className='course-cont-2'>
                                <p className='course-cont-p-1'>Avg. Fees</p>

                                <p className='course-cont-p-2'>1.45L</p>

                            </div>
                            <div className='course-cont-3'>
                                <p className='course-cont-p-1'>Colleges</p>

                                <p className='course-cont-p-2'> 5119</p>

                            </div>

                            <hr />

                            <div className='course-cont-4'>
                                <p className='course-cont-p-4-1'>Course view</p>

                                <img src={image} alt="" />

                            </div>

                        </div>

                    </div>
                </div>

                
                <div className="div">

                <div className='course-width'>

                </div>

                <div className='course-width-circle'>

                </div>

                <div className='course-width-circle'>

                </div>

                </div>

            </div>

        </>
    )
}

export default Course