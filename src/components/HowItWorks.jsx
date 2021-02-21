import React,{Fragment} from 'react'
import Carousel from 'react-elastic-carousel'
import img from './avatar.jpg'


const breakPoints = [
    {width:1,itemsToShow:1},
    {width:90, itemsToShow:2},
    {width:150,itemsToShow:3},
    {width:280, itemsToShow:4},
    {width:370, itemsToShow:5}
]
function HowItWorks() {
    return (
        <Fragment>
            <br/><br/>
            <h1 style={{textAlign:'center'}}>How It Works</h1>
            <br/><br/>
            <div className="carousel">
            <Carousel breakPoints={breakPoints}>

            <div className="carousel-card">
            <h2>Post a Job to see who's available</h2>
            </div>

            <div className="carousel-card">
                <h2>Wait For Experts to show interest</h2>
            </div> 

            <div className="carousel-card">
            <h2>Review Apllicants profiles and pick the best</h2>
            </div>

            <div className="carousel-card">
            <h2>Set up your online agreement with the applicant</h2>
            </div> 

            <div className="carousel-card">
            <h2>Sequentially track the job progress</h2>
            </div>  

            <div className="carousel-card">
            Get the job and payments done
            </div>

            </Carousel>
            </div>
        </Fragment>
    )
}

export default HowItWorks
