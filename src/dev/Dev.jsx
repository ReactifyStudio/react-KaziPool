import React from 'react';
import AssignBid from './AssignBid'
import AssignedBids from './AssignedBids'
import BidList from './BidList'
import ClientValidate from './ClientValidate'
import NewJob from './NewJob'
import ListDetails from './ListDetails'
import NewListing from './NewListing'
import ViewJobs from './ViewJobs'
import ViewListings from './ViewListings'

const style={
    display:'grid',
    gridTemplateColumns:'repeat(1,1fr)',
}

function Dev() {
    return (
        <div style={style}>
            <AssignBid/>
            <AssignedBids/>
            
            <BidList/>
            
            <ClientValidate/>
            <ListDetails/>
            
            <NewJob/>
            
            <NewListing/>
            
            <ViewJobs/>
            
            <ViewListings/>
            
            
        </div>
    )
}

export default Dev
