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
    <li key={requestor.id}>
      <div key={requestor.id}>
          <div>{requestor.email}</div>
        </div>
        <button onClick={() => this.addFriendship(requestor)} >Accepted</button>
    </li>
    )
  );
}





render(){
  const {pendingFriends} = this.props;
  return(<div>
  <div>Pending Friend Requests</div>

  <ul>
    {this.renderPendingFriends()}
  </ul>
  </div>);


}



}


export default PendingFriendsView;
