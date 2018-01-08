import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import BillsFormContainer from './bills_form_container';
import Modal from 'react-modal';


const customStyles = {

    overlay : {
      position          : 'fixed',
      top               : 0,
      left              : 0,
      right             : 0,
      bottom            : 0,
      backgroundColor   : 'rgba(255, 255, 255, 0.75)'
    },
    content : {

    }
  };



class BillsFormModal extends React.Component {
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
          <button className="addBillButton" onClick={this.openModal}>Add Bill</button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestOpen={this.closeModal}
            style={customStyles}
            ariaHideApp={false}
            className={{
            base: 'add-friend-modal',
            afterOpen: 'add-friend-modal',
            beforeClose: 'add-friend-modal'
          }}
            >
              <h2 className="add-friend-header">
                <div>Add a Bill</div>
                <div className="close-x" onClick={this.closeModal} >x</div>
              </h2>
              <BillsFormContainer />
              <fotter className="modal-close">
                <button className="close-add-friend" onClick={this.closeModal}>Cancel</button>
              </fotter>
          </Modal>
      </div>
      );
    }
}


export default BillsFormModal;
