import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ListDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    handleSubmit() {
        // Simple POST request with a JSON body using axios
        const packets = {
            jobTitle:  (new URLSearchParams(window.location.search)).get("jobname"),
            clientName: (new URLSearchParams(window.location.search)).get("clientname"),
            clientID: (new URLSearchParams(window.location.search)).get("clientid"),
            amount: (new URLSearchParams(window.location.search)).get("bidamount"),
            expertName: (new URLSearchParams(window.location.search)).get("expertee"),
            expertID: (new URLSearchParams(window.location.search)).get("experteeID"),
            assignedStatus: 'non-assigned',
            clientValStatus: 'non-validated',
            expertValStatus: 'non-validated'
        };
        alert(JSON.stringify(packets))
        axios.post('/bids',packets)
            .then(response => console.log(response))
            .catch(error => {
                console.log("ERRRR:: ",error.response.data);
                
                });
    }

    render() {
 const jobname = (new URLSearchParams(window.location.search)).get("jobname");
 const clientname = (new URLSearchParams(window.location.search)).get("clientname");
 const bidamount = (new URLSearchParams(window.location.search)).get("bidamount");
        return (
<div className='container py-4'>
<div className='row justify-content-center'>
  <div className='col-md-8'>
    <div className='card'>
      <div className='card-header'>Job Details | List</div>
      <div className='card-body'>
        <ul className='list-group list-group-flush'>
                  <li>Job name: {jobname}</li>
                  <li>Posted by: {clientname}</li>
                  <li>Amount: {bidamount}</li>
        </ul>
        <div className='form-group'>
            <button type="submit" className='btn btn-primary' onClick={this.handleSubmit}>BID JOB</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        );
    }
}

export default ListDetails;