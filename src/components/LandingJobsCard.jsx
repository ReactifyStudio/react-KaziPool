import React,{Fragment} from 'react'
import img1 from './avatar.jpg'

function LandingJobsCard(props) {
    return (
        <Fragment>
            <div className="card text-center shadow">
                <div className="overflow">
                <img src={img1} alt="" className="card-img-top"/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">
                        Software Dev
                    </h4>
                    <p className="card-text text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Quas 
                        enim tempora, corrupti magnam aperiam eum libero name <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <a href="#" className="btn btn-outline-primary">Apply for Job</a>
                </div>
            </div>
            
        </Fragment>
    )
}

export default LandingJobsCard