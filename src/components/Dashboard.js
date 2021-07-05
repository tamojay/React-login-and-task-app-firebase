import React from 'react';
import './Dashboard.css';

const Dashboard = ({handleLogout}) => {

   return (
      <div className='dashboard'>
         <nav>
            <h2>TASK MANAGER</h2>
            <h5>Welcome!</h5>
            <button onClick={handleLogout}>Log Out</button>
         </nav>
      </div>
   )
};

export default Dashboard;
