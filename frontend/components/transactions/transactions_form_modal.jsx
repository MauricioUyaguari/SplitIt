import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import Modal from 'react-modal';
import { customStyles } from '../../util/functions';
import TransactionsFormContainer from './transactions_form_container';

class TransactionsFormModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {modalIsOpen: false};
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal (){
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render(){

    return(
      <div>
        <button className="settleup-button" onClick={this.openModal}>Settle Up</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestOpen={this.closeModal}
          style={customStyles}
          ariaHideApp={false}
          className={{
          base: 'add-bill-modal add-friend-modal',
          afterOpen: 'add-friend-modal add-bill-modal',
          beforeClose: 'add-bill-modal add-friend-modal'
        }}
          >
            <h2 className="add-friend-header">
              <div>Settle Up</div>
              <div className="close-x" onClick={this.closeModal} >x</div>
            </h2>
            <TransactionsFormContainer
              closeModal={() => this.closeModal() }
              />
            <div className="modal-close">
              <button className="close-add-bill close-add-friend" onClick={this.closeModal}>Cancel</button>
            </div>
        </Modal>
    </div>
  );
  }



}



export default TransactionsFormModal;
