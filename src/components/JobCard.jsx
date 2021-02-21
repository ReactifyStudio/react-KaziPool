import React from 'react'
import LandingJobsCard from './LandingJobsCard'

function JobCard() {
    return (
        <div>
            <center>
            <h1>Trending | | Popular Jobs</h1>
            </center>
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

export default JobCard
