import React from 'react'
import "./style.scss";


const Dashboard = () => {
  return (
    <React.Fragment>
      <div className="maincard">
      <header>
           <h2>
               <label for="nav-toggle">
                   <span className="las la-bars m-4"></span>
               </label>
           </h2>
        </header>
        <div className="first-card">
          <div className="first-set-card">
            <div className="card-body">
            <i class="las la-clipboard-list"></i>
              <div>
                <h6>Total Categories</h6>
              </div>
            </div>
          </div>

          <div className="first-set-card">
            <div className="card-body">
            <i class="las la-layer-group"></i>
              <div>
                <h6>learning Materials</h6>
              </div>
            </div>
          </div>

          <div className="first-set-card">
            <div className="card-body">
            <i class="las la-file-invoice"></i>
              <div>
                <h6>Total Subcategories</h6>
              </div>
            </div>
          </div>
        </div>
       
        <div className="second-card">
          <div className="sec-set-card">
            <div className="card-body">
              <i class="las la-check-square"></i>
                <div>
                  <h6>Total Quiz</h6>
                </div>
              </div>
          </div>

          <div className="sec-set-card">
            <div className="card-body">
              <i class="las la-user-graduate"></i>
                <div>
                  <h6>Total Students</h6>
                </div>
              </div>
          </div>

          <div className="sec-set-card">
            <div className="card-body">
                <div className='text-center'>
                  <button>Top three Students</button>
                </div>
              </div>
          </div>
        </div>
        
      </div>
      
    </React.Fragment>
    
  )
}

export default Dashboard
