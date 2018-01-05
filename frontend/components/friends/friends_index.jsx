import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import FriendsIndexItem from './friends_index_item';
import FriendFormContainer from './friends_form_container';



class FriendsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {hidden: true};
  }

  componentDidMount(){
    this.props.fetchFriends();
  }

  renderFriends () {
    return (
    this.props.friends.map(friend => <li>
        <FriendsIndexItem
          friend={friend}
          key={friend.id}
           />
    </li>)
  );
  }



  render(){
    return (<nav className="friends-index">
      <ul>
        { this.renderFriends() }
      </ul>
      <FriendFormContainer />
    </nav>);
  }

}


export default FriendsIndex;
