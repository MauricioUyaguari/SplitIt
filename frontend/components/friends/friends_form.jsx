import React from 'react';
import FriendsCreate from './friends_create';


class FriendsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: ""};
    this.handleChange = this.handleChange.bind(this);
  }


  componentWillReceiveProps(newProps, newState){
    if(Object.values(newProps.friends).length == Object.values(this.props.friends).length){
      return null;
    }
      this.props.fetchSearchedUsers(this.state.username);



  }



  handleChange(event) {
    this.setState({username: event.target.value});
    const temp = event.target.value;
    this.props.fetchSearchedUsers(temp);
  }





  render(){
    // debugger
    const { searchedUsers } = this.props;
    return (
      <section className="search-users">
        Add Friend. Please Provide a username
        <input onChange={this.handleChange}
          type="text"
          value={this.state.username}></input>
        <div className="search-Results">
          <ul>
                    {
                      searchedUsers.map(user => (
                        <FriendsCreate
                          key={user.id}
                          user={user}
                          createFriend={this.props.createFriend}
                           />
                      ))
                    }
          </ul>
        </div>
      </section>
    );
  }



}


export default FriendsForm;
