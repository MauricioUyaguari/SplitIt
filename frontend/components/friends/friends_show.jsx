import React from 'react';
import { Link } from 'react-router-dom';
import FriendsBillsIndexContainer from '../bills/friends_bills_index_container';
import BillsFormContainer from '../bills/bills_form_container';
import BillsFormModal from '../bills/bills_form_modal';
import FriendsBillBalance from '../bills/friends_bill_balance';

class FriendsShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){

    this.props.fetchSingleFriend(this.props.friendId);
  }

  componentWillReceiveProps(newProps){

    if(this.props.friendId != newProps.friendId){
      this.props.fetchSingleFriend(newProps.friendId);
    }
  }

  render () {
    if(this.props.friend == undefined){
      return null;
    }

    return (
    <div className="friends-show">
    <section className="topbar-friend">
      <div className="friend-top-div">
        <img className="connectLogos" src={window.staticImages.dummy_profile_picture}></img>
        <span>{this.props.friend.email}</span>
      </div>
      <div className="actions">
        <BillsFormModal friend={this.props.friend}
          />
        <button className="settleup-button">Settle Up</button>
      </div>
    </section>
    <div className="friend-bill-show">
      <FriendsBillsIndexContainer friendId={this.props.friendId} />
    </div>
    <div>
      <FriendsBillBalance friend={this.props.friend}/>
    </div>
    </div>

    );
  }
}


export default FriendsShow;
