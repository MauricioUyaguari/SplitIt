import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import FriendsIndexItem from './friends_index_item';

class FriendsIndex extends React.Component {
  constructor(props){
    super(props);
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
  
    </nav>);
  }

}


export default FriendsIndex;
