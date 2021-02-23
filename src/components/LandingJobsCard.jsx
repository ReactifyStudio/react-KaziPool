import React,{Fragment} from 'react';
import {Link} from 'react-router-dom';
import img1 from '../assets/agric.jpg';

function LandingJobsCard(props) {
    return (
        <Fragment>
            <div>
            <h1>Trending Jobs <i class="fas fa-fire"></i> </h1>
            <div className="card text-center shadow trend-card">
                <div className="overflow">
                <img src={img1} alt="img" className="card-img-top"/>
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
                    <Link to='/'>
                       <button className="btn"> Apply Here</button>
                    </Link>
                </div>
            </div>
            </div>
            
        </Fragment>
    )
}

export default LandingJobsCard