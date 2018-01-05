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
    position                   : 'absolute',
    top                        : '40px',
    left                       : '35%',
    right                      : '35%',
    width                      : '30%',
    bottom                     : '40px',
    border                     : '1px solid #999',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '15px',
    outline                    : 'none',
    padding                    : '0px'

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
            >
            <div className="add-friend-modal">
              <h2 className="add-friend-header">
                <div>Add a Friend</div>
                <div>X</div>
              </h2>
              <FriendFormContainer />
              <button className="close-add-friend" onClick={this.closeModal}>Close</button>
            </div>
          </Modal>
      </div>
      );
    }
}


export default FriendCreateModal;
