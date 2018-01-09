import React from 'react';
import merge from 'lodash/merge';

class BillForm extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    let dateObj = new Date().toISOString().split('T')[0];
    this.state = {description: "", date: `${dateObj}` , total_amt: "", split_due: "", friend_id: this.props.friend.id };
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
  this.props.closeModal();
  }


render(){

  return(
    <section>
      <div className="add-bill-form-header">
        <div>With <strong>you</strong> and: </div>
        <div className="add-bill-form-header-friend">
          <span>{this.props.friend.email}</span>
        </div>
      </div>
      <form className="add-bill-form" onSubmit={this.handleSubmit}>
        <div className="bill-form-middle">
          <figure>
            <img className="connectLogos" src={window.staticImages.icon_bill2}></img>
          </figure>
          <div className="bill-descr-amt-div">
            <label>
              <input
                className="input-bill-description"
                placeholder="Enter a description"
                type="text"
                value={this.state.description}
                onChange={this.update('description')}
                />
            </label>
            <label> $
              <input
                 className="input-bill-total"
                type="number"
                placeholder="0.00"
                min="0"
                max="99999999"
                step="0.01"
                value={this.state.total_amt}
                onChange={this.update('total_amt')}
                />

            </label>
          </div>
        </div>
        <section className="bill-form-splits">
          Paid by
            <select className="pay-dropdown" id="dropdown"
              onChange={this.update("payer")}
              >
              <option >You</option>
              <option >{this.props.friend.email}</option>
            </select>.
              Your split is
              <input onChange={this.update("split_due")}
                className="split-percentage"
                value={this.state.split_due}
                type="number"
                min="1"
                max="100"
                id="myPercent"
                starting="50" /> %
          </section>
          <section className="date-div">
              <input
                id="myDate"
                className="input-bill-date"
                type="date"
                value={this.state.date}
                onChange={this.update('date')}
                />
            </section>
          <button className="save-bill">Save</button>
      </form>
    </section>
  );
}


}


export default BillForm;
