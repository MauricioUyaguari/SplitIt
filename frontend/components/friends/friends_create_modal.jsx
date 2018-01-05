import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FriendFormContainer from './friends_form_container';
import Modal from 'react-modal';


const customStyles = {
  overlay : {
    position          : 'fixed'
  },
  content : {
    position                   : 'absolute',
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
                <div onClick={this.closeModal} >X</div>
              </h2>
              <FriendFormContainer />
              <button className="close-add-friend" onClick={this.closeModal}>Cancel</button>
              <div></div>
          </Modal>
      </div>
      );
    }
}


export default FriendCreateModal;
