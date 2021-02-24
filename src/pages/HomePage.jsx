import React,{Fragment} from 'react';
import JobCard from '../components/JobCard';

function HomePage() {
  return (
    <Fragment>
      <div>
      {/* <Jumbotron/> */}
      <h2 className="p-fire">Trending Jobs <i class="fas fa-fire"></i> </h2>
      <JobCard/>

      
      </div>       
    </Fragment>
  );
}

export default HomePage;