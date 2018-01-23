import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import FriendsIndexContainter from '../friends/friends_index_container';



const LeftNav = () => {


  const topDashboard = () =>  {
    return(
      <ul>
        <li>
          <Link to="/dashboard">
          <img src={window.staticImages.icon_house}></img>
          <span>DashBoard</span>
          </Link>
        </li>
        <li>
          <Link to="/all">
            <img src={window.staticImages.icon_flag}></img>
            <span>All Transactions</span>
          </Link>
        </li>
      </ul>
    );
  };

  return (
    <nav className="left-nav">
      <div className="left-nav-dashboard">
        { topDashboard()}
        </div>
        <FriendsIndexContainter />
    </nav>
  );
};



export default LeftNav;
