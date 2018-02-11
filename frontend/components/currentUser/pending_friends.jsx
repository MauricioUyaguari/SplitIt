import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

class PendingFriendsView extends React.Component {


  constructor(props){
    super(props);
  }




  addFriendship (requestor){
    this.props.approveFriendship(requestor.id);

    this.props.history.push(`/friends/${requestor.id}`);
  }


renderPendingFriends() {
  const {pendingFriends} = this.props;

  return(pendingFriends.map(requestor =>
    <li className="friend-request-li" key={requestor.id}>
      <div className="friend-request-div" key={requestor.id}>
        <img className="friend-request-img" src={window.staticImages.icon_person}></img>
          <div className="request-name">{requestor.email}</div>
        <button className="accept-button" onClick={() => this.addFriendship(requestor)} >Accept</button>
      </div>
    </li>
    )
  );
}





render(){
  const {pendingFriends} = this.props;
  if (pendingFriends.length < 1){
    return (
      <div>
        Welcome to SplitIt.
      </div>
    );
  }

  return(<div>
  <div>Pending Friend Requests</div>
  <ul>
    {this.renderPendingFriends()}
  </ul>
  </div>);


}



}


export default PendingFriendsView;
