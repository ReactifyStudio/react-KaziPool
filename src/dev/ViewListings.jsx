import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class ViewListings extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listings:[]
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using axios
        axios.post('/listview')
            .then(response => this.setState({ listings: response.data }))
            .catch(error => {
                console.log("ERRRR:: ",error.response.data);
                
                });
    }

    render() {
        const { listings } = this.state;
        return (
<div className='container py-4'>
<div className='row justify-content-center'>
  <div className='col-md-8'>
    <div className='card'>
      <div className='card-header'>All tests</div>
      <div className='card-body'>
        <ul className='list-group list-group-flush'>
        {listings.map(list => (
        <Link className='list-group-item list-group-item-action d-flex justify-content-between align-items-center'
              to={`/listdetails?jobname=${list.jobTitle}&clientname=${list.clientName}&clientid=${list.clientID}&bidamount=${list.amount}`}
              key={list.id}>
                  <li>{list.jobTitle}</li>
                  <li>Posted by: {list.clientID}</li>
                  <li>Amount: {list.amount}</li>
                        </Link>
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

export default ViewListings;