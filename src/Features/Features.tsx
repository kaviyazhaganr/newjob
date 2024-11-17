import './Features.css'

import image from '/JOB/job-project/public/Rectangle 198-features.png'



import image3 from '/JOB/job-project/public/Frame 198-star.png'

import image4 from '/JOB/job-project/public/Frame 199 features.png'

// import image5 from '/JOB/job-project/public/ep_right.png'


import review from '/JOB/job-project/public/Frame 199-review-1.png'

import review1 from '/JOB/job-project/public/4.5(486 Reviwes).png'


import review2 from '/JOB/job-project/public/Frame 199-review.png'


// second


import image6 from '/JOB/job-project/public/Rectangle 198 (1)-features.png'



// third


import image8 from '/JOB/job-project/public/Rectangle 198 (2)-features.png'




//fourth

import image10 from '/JOB/job-project/public/Rectangle 198 (3)-features.png'



const Features = () => {
    return (
        <>


            <div className="features">

                <div className='features-head'>
                    <h1>Featured Colleges</h1>
                </div>


                <div className='features-width-flex'>


                    {/* first container */}

                    <div className="features-cont-1">

                        <div className="features-cont-1-1">

                            <img src={image} alt="" className='features-cont-1-1-img' />

                            <div className='features-cont-first'>

                                {/* <div>

                                    <img src={image1} alt="" className='img-width' />
                                </div> */}

                                <div className='features-cont-first-position'>

                                    <div>

                                        <h2 className='features-cont-first-h2'>Vevekanadha- Global University (VGU)</h2>

                                    </div>

                                    <div className='chennai-flex'>

                                        <h4 className='features-cont-flex-h4'>Jaipur (Rajasthan)</h4>

                                        <div className='chennai-flex-img'>
                                            <img src={image3} alt="" />
                                            <img src={review} alt="" />
                                        </div>

                                    </div>

                                    <hr />

                                    <div className='view-flex'>

                                        <p className='features-cont-flex-p'>Highest package</p>

                                        <div>
                                            {/* <img src={image5} alt="" /> */}

                                            <p className='features-cont-flex-p' >54 Lags</p>

                                        </div>


                                    </div>

                                    <hr />

                                    <div className='view-flex'>

                                        <p className='features-cont-flex-p'>Year of Estiblishment</p>

                                        <div>
                                            {/* <img src={image5} alt="" /> */}
                                            <p className='features-cont-flex-p'>2012</p>

                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>


                    {/* second container */}


                    <div className="features-cont-1">

                        <div className="features-cont-1-1">

                            <img src={image6} alt="" className='features-cont-1-1-img' />

                            <div className='features-cont-first'>

                                {/* <div>

                                    <img src={image7} alt="" className='img-width' />
                                </div> */}

                                <div className='features-cont-first-position'>

                                    <h2 className='features-cont-first-h2'>Sanskriti University Mathura</h2>

                                    <div className='chennai-flex'>

                                        <h4 className='features-cont-flex-h4'>Mathura (Uttar Pradesh)</h4>

                                        <div className='chennai-flex-img'>
                                            <img src={image3} alt="" />
                                            <img src={review2} alt="" />
                                        </div>

                                    </div>

                                    <hr />

                                    <div className='view-flex'>

                                        <p className='features-cont-flex-p'>Highest package</p>

                                        <div>
                                            {/* <img src={image5} alt="" /> */}
                                            <p className='features-cont-flex-p' >42 Lags</p>

                                        </div>


                                    </div>

                                    <hr />

                                    <div className='view-flex'>

                                        <p className='features-cont-flex-p'>Year of Estiblishment</p>

                                        <div>
                                            {/* <img src={image5} alt="" /> */}
                                            <p className='features-cont-flex-p' >2016</p>

                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>


                    {/* third container */}


                    <div className="features-cont-1">

                        <div className="features-cont-1-1">

                            <img src={image8} alt="" className='features-cont-1-1-img' />

                            <div className='features-cont-first'>

                                {/* <div>

                                    <img src={image9} alt="" className='img-width' />
                                </div> */}

                                <div className='features-cont-first-position'>

                                    <div>
                                        <h2 className='features-cont-first-h2' >Jaipur National University (JNU Jaipur</h2>
                                    </div>


                                    <div className='chennai-flex'>

                                        <h4 className='features-cont-flex-h4'>Jaipur (Rajasthan)</h4>

                                        <div className='chennai-flex-img'>
                                            <img src={image3} alt="" />
                                            <img src={review1} alt="" />
                                        </div>

                                    </div>

                                    <hr />

                                    <div className='view-flex'>

                                        <p className='features-cont-flex-p'>Highest package</p>

                                        <div>
                                            {/* <img src={image5} alt="" /> */}
                                            <p className='features-cont-flex-p' >12 Lags</p>

                                        </div>


                                    </div>

                                    <hr />

                                    <div className='view-flex'>

                                        <p className='features-cont-flex-p'>Year of Estiblishment</p>

                                        <div>
                                            {/* <img src={image5} alt="" /> */}

                                            <p className='features-cont-flex-p' >2017</p>

                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>


                    {/* four th container */}

                    <div className="features-cont-1">

                        <div className="features-cont-1-1">

                            <img src={image10} alt="" className='features-cont-1-1-img' />

                            <div className='features-cont-first'>

                                {/* <div>

                                    <img src={image11} alt="" className='img-width' />
                                </div> */}

                                <div className='features-cont-first-position'>

                                    <h2 className='features-cont-first-h2'>Indaian Institute of Technology Bombay</h2>

                                    <div className='chennai-flex'>

                                        <h4 className='features-cont-flex-h4'>Mumbai (Maharashtra)</h4>

                                        <div className='chennai-flex-img'>
                                            <img src={image3} alt="" />
                                            <img src={image4} alt="" />
                                        </div>



                                    </div>

                                    <hr />

                                    <div className='view-flex'>

                                        <p className='features-cont-flex-p'>Highest package</p>

                                        <div>
                                            {/* <img src={image5} alt="" /> */}

                                            <p className='features-cont-flex-p' >54 Lags</p>

                                        </div>


                                    </div>

                                    <hr />

                                    <div className='view-flex'>

                                        <p className='features-cont-flex-p'>Year of Estiblishment</p>

                                        <div>
                                            {/* <img src={image5} alt="" /> */}
                                            <p className='features-cont-flex-p' >2012</p>

                                        </div>


                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>

                <div className='view-cont'>

                    <a href="" className='view'>view more</a>
                </div>

            </div>




        </>

    )
}

export default Features