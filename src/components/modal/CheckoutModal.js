import React, { Component } from 'react'
import Modal from '../modal/Modal'
import ModalHeader from '../modal/ModalHeader'
import ModalFooter from '../modal/ModalFooter'
import ModalContent from '../modal/ModalContent'

class CheckoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
      }
      // this.hideModal = this.handleClick.bind(this);
    }

  componentDidMount() {
    document.addEventListener('keydown', this.keydownHandler, false);
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

  handlePaymentAction =()=>{
    this.props.reset();
    this.props.hideModal();
  }

  render() {
    const { show, hideModal } = this.props;
    
    return (
      <Modal show={show} id="modal-info">
        <ModalHeader headerTitle="CHECKOUT COUNTER" />
        <ModalContent>
          <div>
            <span>Total price of your purchase: {this.props.total} EUR</span>
          </div>
          <div>Select delivery option</div>
          <ModalFooter className="modal-board__footer">
                <button className="button-main modal-btn-1"
                onClick={hideModal}>
                Continue shopping
                </button>
                <button className="button-main modal-btn-2"
                onClick={this.handlePaymentAction}>
                Proceed to payment
                </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

export default CheckoutModal
