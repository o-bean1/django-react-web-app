import DateSelector from '../components/DateSelector';
import { useEffect, useState } from 'react';

// import classes from './Home.css';

function HomePage() {


  return  (
    <div className="jumbotron jumbotron-fluid page-header position-relative" >
        <div className="container text-center py-5">
            <h1 className="text-white display-1">Save up to 40%</h1>
            <div className="d-inline-flex text-white mb-5">
                {/* <p className="m-0 text-uppercase"><a className="text-white" href="">Home</a></p>
                <i className="fa fa-angle-double-right pt-1 px-3"></i> */}
                <p className="m-0s">Find the optimum time to buy your train tickets - enter journey date below</p>
            </div>
            <div className="mx-auto mb-5" style={{width: "100%", maxWidth: "600px"}}>
                    {/* <div className="input-group-prepend">
                        <button className="btn btn-outline-light bg-white text-body px-4 dropdown-toggle" type="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Courses</button>
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">Courses 1</a>
                            <a className="dropdown-item" href="#">Courses 2</a>
                            <a className="dropdown-item" href="#">Courses 3</a>
                        </div>
                    </div> */}
                    < DateSelector />
                
            </div>
        </div>
    </div>
  )
}

export default HomePage;
