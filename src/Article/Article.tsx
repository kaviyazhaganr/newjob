
import './Article.css'

import image from '/JOB/job-project/public/ei_arrow-right.png'

import image4 from '/JOB/job-project/public/ei_arrow-right (1).png'

import image1 from '/job/job-project/public/undraw_graduation_re_gthn 1.png'

import image2 from '/job/job-project/public/OIP (1).png'

import image5 from '/job/job-project/public/cuet-pg-exam-2025.png'

import image6 from '/job/job-project/public/Assam-NEET-PG-Counselling-1024x640.png'

import image7 from '/job/job-project/public/MBA.png'





const Article = () => {
    return (
        <>

            <div className="article">

                <h1>Latest Articles</h1>


                <div className="div-flex">

                    <div className="div-img">
                        <img src={image} alt="" className="div-img-1" />
                    </div>

                    <div className="article-cont-width">



                        <div className="article-cont">

                            <div className="article-cont-1">

                                <img src={image1} alt="" className='article-cont-1-img' />
                                <div>
                                    <img src={image2} alt="" className='article-cont-1-img-1' />
                                </div>

                                <h2>Karnataka PGCET Result 2024</h2>
                                <p>KEA has recently released the revised answer key for Karnataka PGCET ME, MTech and MArch exam that was held on September 18. Catch live updates on Karnataka PGCET 2024 results here</p>

                                <a href="">View</a>

                            </div>

                        </div>

                        <div className="article-cont">

                            {/* second */}

                            <div className="article-cont-1">

                                <img src={image1} alt="" className='article-cont-1-img' />
                                <div>
                                    <img src={image5} alt="" className='article-cont-1-img-1' />
                                </div>

                                <h2>CUET Courses List 2025</h2>
                                <p>CUET course list 2025 offers various UG and PG courses, such as BA, BSc, BCom, BBA, B Arch, MSc, and so on, for candidates seeking CUET UG admission 2025. Candidates can look over the list of available courses and begin applying for their preferred course</p>

                                <a href="">View</a>

                            </div>

                        </div>

                        <div className="article-cont">

                            {/* Third */}

                            <div className="article-cont-1">

                                <img src={image1} alt="" className='article-cont-1-img' />
                                <div>
                                    <img src={image6} alt="" className='article-cont-1-img-1' />
                                </div>

                                <h2>Assam NEET PG Counselling 2024 Provisional Merit List Released.</h2>
                                <p>Assam NEET PG counseling 2024 provisional state merit list has been released on the official website by DME. The names of 2930 candidates are mentioned in the list, meaning they are eligible to participate in the Assam .....</p>

                                <a href="">View</a>

                            </div>

                        </div>


                        {/* fourth */}

                        <div className="article-cont">

                            <div className="article-cont-1">

                                <img src={image1} alt="" className='article-cont-1-img' />
                                <div>
                                    <img src={image7} alt="" className='article-cont-1-img-1' />
                                </div>

                                <h2>MBA Entrance  </h2>
                                <p>Seeking MBA admissions in India? Here's everything you need Ito know about top MBA entrance exams 2024-25 in India, induding important dates, exam pattern, syllabus, MBA colleges accepting their scores, and more!</p>

                                <a href="">View</a>

                            </div>
                        </div>


                    </div>

                    <div className="div-img">
                        <img src={image4} alt="" className="div-img-2" />
                    </div>
                </div>
            </div>


        </>
    )
}

export default Article