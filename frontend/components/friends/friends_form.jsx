import React from 'react';
import FriendsCreate from './friends_create';


class FriendsForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {username: ""};
    this.handleChange = this.handleChange.bind(this);
  }




  handleChange(event) {
    this.setState({username: event.target.value});
    const temp = event.target.value;
    this.props.fetchSearchedUsers(temp);
  }





  render(){
    const { searchedUsers } = this.props;
    return (
      <section className="search-users">
        <input className="input-search-user" onChange={this.handleChange}
          type="text"
          placeholder="Search by Username"
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
