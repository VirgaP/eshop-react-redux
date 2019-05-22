import React, { Component } from 'react';
import Modal from '../modal/Modal';
import ModalHeader from '../modal/ModalHeader';
import ModalFooter from '../modal/ModalFooter';
import ModalContent from '../modal/ModalContent';

class CheckoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      }
    }

  componentDidMount() {
    // const { dispatch } = this.props;
    // const { user } = this.state;
    // dispatch(userActions.getUserCarPlates(user));
    document.addEventListener('keydown', this.keydownHandler, false);
  }

  componentWillReceiveProps(nextProps) {
    // const { trip, userCarPlates } = this.props;
    // if (nextProps.trip.id !== trip.id) {
    //   this.setState({
    //     trip: nextProps.trip, user: userCarPlates, errorMessage: '', errorMessageDate: ''
    //   });
    // }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.keydownHandler, false);
  }

  keydownHandler = (event) => {
    const { hideModal } = this.props;
    if (event.keyCode === 27) {
      hideModal();
    }
  };

  render() {
    const { show, hideModal } = this.props;
    
    return (
      <Modal show={show} id="modal-info">
        <ModalHeader headerTitle="CHECKOUT COUNTER" />
        <ModalContent>
          <div>{this.props.total}</div>
          <ModalFooter className="modal-board__footer">
            <div className="modal-btn-1">
              <button className="button-main"
                onClick={hideModal}>
                Continue shopping
                </button>
            </div>
            <div className="modal-btn-2">
            <button className="button-main"
                onClick={this.props.onCheckoutClicked}>
                Proceed to payment
                </button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

export default CheckoutModal
