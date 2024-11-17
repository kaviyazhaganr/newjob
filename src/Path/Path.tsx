import image from '/JOB/job-project/public/pexels-zen-chung-5537517.png'
import './Path.css'

const Path = () => {
    return (
        <>
            <div className="path-cont">

                <div className='path-cont-width'>
                    <div className="path-cont-1">

                        <img src={image} alt="" className='path-cont-1-img' />

                    </div>

                    <div className="path-cont-2">

                        <h1>Explore Your Path</h1>
                        <p>Whether you're passionate about Engineering, eager to lead in Management, driven by Commerce, or inspired by the Arts, choose the study goal that aligns with your future aspirations and start your journey today.</p>
                        

                        <div className='align-center'>
                        <a href="">Explore</a>
                        </div>

                    </div>

                </div>


            </div>
        </>
    )
}

export default Path