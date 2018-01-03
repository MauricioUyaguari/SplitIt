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
     <label className="password-input">
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
     <label className="email-input">
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
      WELCOME TO   S P L I T I T
    </div>);
  } else{
  return (<div>
    Introduce Yourself
    <label>
      <span>Hi There! My Name is </span>
      <input type="text">
      </input>
    </label>
  </div>);
  }
}

  linkto(){
    if(this.props.formType === "login"){
      return(
        <Link to="/signup"> Sign Up</Link>
      );
    } else{
      return(
        <Link to="/login"> Log in</Link>
      );
    }
  }



  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
        </li>) )}
      </ul>
    );
  }

  render() {
    const {formType } = this.props;
    const submitLabel = (formType) === "login" ? "Log In" : "Sign me Up";
    return(
    <div className="entrance-form">
      <img src={window.staticImages.splititlogo}></img>
      <form className={`login-signup-form`} onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <section className="form-heading" >
          {this.formHeading()}
        </section>
          {this.emailRender()}
          {this.passwordRender()}
        <div className={`submit-creds${formType}`}>
          <input type="submit" value={submitLabel} />
        </div>
        <p>
          <span> or</span>
          <span>{this.linkto()} </span>
        </p>
      </form>
    </div>
  );
  }

}


export default SessionForm;
