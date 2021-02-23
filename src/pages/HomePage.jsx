import React,{Fragment} from 'react';
// import Jumbotron from '../components/Jumbotron';
import JobCard from '../components/JobCard'

import Footer from '../components/Footer';

function HomePage() {
  return (
    <Fragment>
      {/* <Jumbotron/> */}
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
      <h1>Trending Jobs <i class="fas fa-fire"></i> </h1>
      </div>
      <JobCard/>

      <Footer/>        
    </Fragment>
  );
}

export default HomePage;