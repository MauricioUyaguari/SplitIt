import React from 'react';
import merge from 'lodash/merge';

class BillForm extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {description: "", date: "", total_amt: "", split_due: "", friend_id: this.props.friend.id };
  }





  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };

  }

  handleSubmit(e) {
  e.preventDefault();
  const { currentUser, friend} = this.props;
  let drop = $( "#dropdown option:selected" ).text();
  let payer_id = (drop === "You") ? currentUser.id : friend.id;
  const split_amt_due = (this.state.split_due/100) * (this.state.total_amt)
  let newBill = merge({}, this.state, {"payer_id": payer_id}, {"split_due": split_amt_due});
  this.props.createBill(newBill);
  }


render(){

  return(
    <section onSubmit={this.handleSubmit}>
      Add A Bill
      <form>
        <label>Description
          <input
            type="text"
            value={this.state.text}
            onChange={this.update('description')}
            />
        </label>
        <label>Date
          <input
            type="date"
            value={this.state.date}
            onChange={this.update('date')}
            />
        </label>
        <label>Bill Total
          <input
            type="number"
            value={this.state.total_amt}
            onChange={this.update('total_amt')}
            />
        </label>
        <label>Payer
          <select id="dropdown"
            onChange={this.update("payer")}
            >
            <option >You</option>
            <option >{this.props.friend.email}</option>
          </select>
          </label>
          <span>Split the Bill</span>
          <label> Enter your assigned percentage
            <input onChange={this.update("split_due")}
              value={this.state.split_due}
              type="number"
              min="1"
              max="100"
              id="myPercent"
              starting="50" /> %
          </label>
          <input type='submit'></input>
      </form>
    </section>
  );
}


}


export default BillForm;
