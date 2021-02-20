import React from 'react'
import LandingJobsCard from './LandingJobsCard'

function CardLoops() {
    return (
        <div>
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-4">
                    <LandingJobsCard/>
                    </div>
                    <div className="col-md-4">
                    <LandingJobsCard/>
                    </div>
                    <div className="col-md-4">
                    <LandingJobsCard/>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default CardLoops
