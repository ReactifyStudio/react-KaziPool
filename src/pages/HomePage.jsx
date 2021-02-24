import React,{Fragment} from 'react';
// import Jumbotron from '../components/Jumbotron';
import JobCard from '../components/JobCard';
import Header from '../components/Header'


function HomePage() {
  return (
    <Fragment>
      <div>
      <Header/>
      {/* <Jumbotron/> */}
      <h2 className="p-fire">Trending Jobs <i class="fas fa-fire"></i> </h2>
      <JobCard/>

      
      </div>       
    </Fragment>
  );
}

export default HomePage;