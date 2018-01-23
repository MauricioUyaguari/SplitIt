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



 componentWillUnmount(){
   this.props.removeErrors();
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
       <span>Username</span>
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
    Introduce yourself
    <label>
      <span>Hi there my name is </span>
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
    if(this.props.errors.length < 1){
      return (<span></span>);
    }
    return(
      <ul className="creds-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
        </li>) )}
      </ul>
    );
  }
  demoLogin(){
    const show = (this.props.formType) === "login" ? true : false;
    if(show){
      const demoUser = {email: "DemoUser", password: "password"};
      return(<div className="demo-button" onClick={() => this.props.processForm(demoUser)}>Demo Login</div>);
    }
    return null;
  }
  render() {
    const {formType } = this.props;
    const submitLabel = (formType) === "login" ? "Log In" : "Sign me Up";
    return(
    <div className="entrance-form">
      <div>
      <img className="signin-logo" src={window.staticImages.splititlogo}></img>
      </div>
      <form className={`login-signup-form`} onSubmit={this.handleSubmit}>
        {this.renderErrors()}
        <section className="form-heading" >
          {this.formHeading()}
        </section>
          <section className="email-and-password">
            {this.emailRender()}
            {this.passwordRender()}
          </section>
        <div className={`submit-creds${formType}`}>
          <input type="submit" value={submitLabel} />

          {this.demoLogin()}
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
