import React,{Fragment} from 'react'

function SideBarLayout(props) {
    return (
    <Fragment>
        <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Title</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div id="content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <div className="right-sideabr">
                                <h4>Manage Account</h4>
                                <ul className="list-item">
                                    <li>
                                        DashboardLink
                                    </li>
                                    <li>
                                        ApplicantsLink
                                    </li>
                                    <li><a href="#!">Change Password</a></li>
                                    <li style={{cursor: 'pointer'}}>
                                        <a>Sing Out</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>

    </Fragment>
            
        
    )
}

export default SideBarLayout
