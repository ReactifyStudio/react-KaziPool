import React,{Fragment} from 'react'

function ExpertSideBarLayout(props) {
    return (
        <Fragment>
        <div className="side-bar">    
        <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Your Name</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="content">
                                <h4>Manage Account</h4>
                                <ul className="list-item">
                                    <li>
                                        DashboardLink
                                    </li>
                                    <li>
                                        Your Current Jobs
                                    </li>
                                    <li>
                                        Profile
                                    </li>
                                    <li><a href="#!">Change Password</a></li>
                                    <li style={{cursor: 'pointer'}}>
                                        <a>Sing Out</a>
                                    </li>
                                </ul>

                        
                        {props.children}
            </div>
            </div>

    </Fragment>
    )
}

export default ExpertSideBarLayout
