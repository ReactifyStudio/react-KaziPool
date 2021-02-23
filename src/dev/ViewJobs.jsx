import React from 'react';
import axios from 'axios';

class ViewJobs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            jobs:[]
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using axios
        axios.post('/clientelle')
            .then(response => this.setState({ jobs: response.data }));
    }

    render() {
        const { jobs } = this.state;
        return (
<div className='container py-4'>
<div className='row justify-content-center'>
  <div className='col-md-8'>
    <div className='card dash'>
      <div className='card-header'><h2>View Jobs</h2></div>
      <div className='card-body'>
        <ul className='list-group list-group-flush'>
          {jobs.map(jobo => (
              <li>{jobo.NatID}</li>
          )) }
        </ul>
      </div>
    </div>
  </div>
</div>
</div>
        );
    }
}

export default ViewJobs;