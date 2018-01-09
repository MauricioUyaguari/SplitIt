import React from 'react';
import { Route, Redirect, Switch, Link , HashRouter} from 'react-router-dom';
import '../../util/route_util';



// Friends Bills Splits and Transactions

import FriendsIndexContainter from '../friends/friends_index_container';
import LeftNav from './left_nav';
import FriendsShowContainer from '../friends/friends_show_container';

const LoggedInContents = () => {
  return(
    <div className="logged-in-div">
      <LeftNav />
      <section className="logged-in-body-div">

         <Route path="/friends/:friendId" component={FriendsShowContainer} />
      </section>
      <section className="right-nav">
        <p> right shit goes here</p>
      </section>
    </div>
  );
};


export default LoggedInContents;
