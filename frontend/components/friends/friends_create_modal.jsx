import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FriendFormContainer from './friends_form_container';
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



class FriendCreateModal extends React.Component {
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
          <button className="addFriendButton" onClick={this.openModal}>+ add</button>
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
                <div>Add a Friend</div>
                <div className="close-x" onClick={this.closeModal} >x</div>
              </h2>
              <FriendFormContainer closeModal={() => this.closeModal() } />
              <fotter className="modal-close">
                <button className="close-add-friend" onClick={this.closeModal}>Cancel</button>
              </fotter>
          </Modal>
      </div>
      );
    }
}


export default FriendCreateModal;
