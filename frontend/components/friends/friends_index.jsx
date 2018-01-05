import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import FriendsIndexItem from './friends_index_item';
import FriendFormContainer from './friends_form_container';
import Modal from 'react-modal';
import FriendCreateModal from './friends_create_modal';


class FriendsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal(){
    this.setState({modalIsOpen: false});
  }

  componentDidMount(){
    this.props.fetchFriends();
  }

  renderFriends () {
    return (
    this.props.friends.map(friend => <li key={friend.id}>
        <FriendsIndexItem
          friend={friend}
          key={friend.id}
           />
    </li>)
  );
  }

  render(){
    return (<nav className="friends-index">
      <div className="friends-index-header">
        <span> Friends </span>
        <FriendCreateModal />
      </div>
      <ul>
        { this.renderFriends() }
      </ul>
    </nav>);
  }

}

export default FriendsIndex;
