import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field){
    return (e) => this.setState(
      {[field]: e.currentTarget.value}
    );
  }


  componentWillReceiveProps(nextProps) {
   if( nextProps.loggedIn){
     this.props.history.push('/');
   }
 }

 passwordRender(){
   return(
     <label>
       <span>Password</span>
       <input type="password"
         value={this.state.password}
         onChange={this.update('password')}
         >
       </input>
     </label>
   );
 }
 emailRender(){
   return(
     <label>
       <span>Email Address</span>
       <input type="text"
         value={this.state.email}
         onChange={this.update('email')}
         >
       </input>
     </label>
   );
 }

formHeading(){
  if(this.props.formType === "login"){
    return(<div>
      <br />
      Welcome to SplitIt!
    </div>);
  } else{
  return (<div>
    <br />
    Introduce Yourself
    <br />
    <label>
      <span>Name</span>
      <input type="text">
      </input>
    </label>
  </div>);
  }
}



  render() {
    const {formType } = this.props;
    const submitLabel = (formType) === "login" ? "Log In" : "Sign Up";
    return(<div className={`${formType}-form`}>
      <form onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        {this.formHeading()}
        {this.emailRender()}
        <br />
          {this.passwordRender()}
        <br />
          <input type="submit" value={submitLabel} />
      </form>
    </div>);
  }

}


export default SessionForm;
