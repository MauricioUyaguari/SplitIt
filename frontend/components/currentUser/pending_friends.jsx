import React from 'react';
import { Link } from 'react-router-dom';

class PendingFriendsView extends React.Component {


  constructor(props){
    super(props);
  }




renderPendingFriends() {
  const {pendingFriends} = this.props;
  return(pendingFriends.map(requestor =>
    <li key={requestor.id}>
      <div key={requestor.id}>
          <div>{requestor.email}</div>
        </div>
        <button>Accepted</button>
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
