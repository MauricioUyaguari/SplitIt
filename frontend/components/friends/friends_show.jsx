import React from 'react';
import { Link } from 'react-router-dom';

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
          <section>
      <div>
        <img className="connectLogos" src={window.staticImages.dummy_profile_picture}></img>
        <span>{this.props.friend.email}</span>
      </div>
      <div>
        <button>Add a Bill</button>
        <button>Pay Up</button>
      </div>
    </section>
    </div>

    );
  }
}


export default FriendsShow;
