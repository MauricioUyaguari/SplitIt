import React from 'react';
import { Link } from 'react-router-dom';


class TransactionsForm extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {amount_payed: "", loaner: this.props.friend.email };
    this.updatePayer = this.updatePayer.bind(this);
    this.update = this.update.bind(this);
  }



  handleSubmit(e){

    e.preventDefault();
    const {friend, currentUser} = this.props;
    const payer = (this.state.loaner === "You") ?  friend : currentUser;
    const loaner = (this.state.loaner === "You") ?  currentUser : friend;
    let newTransaction = {amount_payed: this.state.amount_payed, payer_id: payer.id, loaner_id: loaner.id};
    this.props.createTransaction(newTransaction);
    this.props.closeModal();

  }

  updatePayer(){
    return (e) => {
      let drop = $( "#transaction-dropdown option:selected" ).text();
      const loaner = (drop == "You") ? this.props.friend.email : "You"
      this.setState({loaner: loaner});
    };
  }

  update(){
    return (e) => {
      this.setState({amount_payed: e.target.value});
    };
  }

  render(){
    return(
      <section>
        <form onSubmit={this.handleSubmit}>



          <label> $
            <input
               className="input-bill-total"
              type="number"
              placeholder="0.00"
              min="0.01"
              max="99999999"
              step="0.01"
              value={this.state.amount_payed}
              onChange={this.update()}
              />
          </label>
          Paid by
            <select className="pay-dropdown" id="transaction-dropdown"
              onChange={this.updatePayer()}
              >
              <option >You</option>
              <option >{this.props.friend.email}</option>
            </select>
            to
            <div>{this.state.loaner}</div>
            <button>save</button>
        </form>


      </section>
    );
  }



}
export default TransactionsForm;
