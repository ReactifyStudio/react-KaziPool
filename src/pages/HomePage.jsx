import React,{Fragment} from 'react';
// import Jumbotron from '../components/Jumbotron';
import JobCard from '../components/JobCard'

import Footer from '../components/Footer';

function HomePage() {
  return (
    <Fragment>
      {/* <Jumbotron/> */}
      <h1>Trending | <i class="fas fa-fire"></i> | Top Jobs</h1>
     
      <JobCard/>

      <Footer/>        
    </Fragment>
  );
}

export default HomePage;