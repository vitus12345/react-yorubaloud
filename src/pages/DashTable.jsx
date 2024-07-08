import React from 'react'

const DashTable = () => {
  return (
    <React.Fragment>
      <div className='table-wrapper'>
        <table className='table'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Position</th>
              <th>Total score</th>
            </tr>
          </thead>
        </table>
      </div>
    </React.Fragment>
  )
}

export default DashTable
