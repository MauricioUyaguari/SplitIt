import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import FriendsIndexItem from './friends_index_item';
import FriendFormContainer from './friends_form_container';



class FriendsIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {hidden: true};
    this.handleHidden = this.handleHidden.bind(this);
    this.renderForm = this.renderForm.bind(this);
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


  handleHidden(){
    this.setState({ hidden: !this.state.hidden});
  }

  renderForm(){
    if(!this.state.hidden){
      return (
        <FriendFormContainer />
      );
    }
  }


  render(){
    return (<nav className="friends-index">
      <div>
        <span> Friends </span>
        <button onClick={this.handleHidden}>+</button>
      </div>
      <ul>
        { this.renderFriends() }
      </ul>


      {this.renderForm()}

    </nav>);
  }

}


export default FriendsIndex;
