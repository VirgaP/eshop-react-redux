import React, { Component } from 'react'
import Modal from '../modal/Modal'
import ModalHeader from '../modal/ModalHeader'
import ModalFooter from '../modal/ModalFooter'
import ModalContent from '../modal/ModalContent'

class CheckoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disable: true,
      errorMessage: 'Please choose delivery option',
      deliveryFee: ''
      }
    }

  componentDidMount() {
    document.addEventListener('keydown', this.escKeyHandler, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escKeyHandler, false);
  }

  escKeyHandler = (event) => {
    const { hideModal } = this.props;
    if (event.keyCode === 27) {
      hideModal();
    }
  };

  handlePaymentAction =()=>{
    this.props.reset();
    this.props.hideModal();
  }

  handleSelect=(e)=>{
    const delivery = e.target.value
    if(delivery === "express"){
      this.setState({ deliveryFee: 5 })
    }if(delivery === "standard"){
      this.setState({ deliveryFee: 2 })
    }if(delivery === "self"){
      this.setState({ deliveryFee: 0 })
    }if(delivery != null ||delivery !== "options"){
      this.setState({ disable: false, errorMessage:"" })
    } 
  }

  render() {
    const { show, hideModal } = this.props;
 
    const totalPrice = parseFloat(this.props.total) + this.state.deliveryFee;
    return (
      <Modal show={show} id="modal-info">
        <ModalHeader headerTitle="CHECKOUT COUNTER" />
        <ModalContent>
          <div className="error modal-error">
          <span>{this.state.errorMessage}</span>
          </div>
          <div className="modal-checkout-section">
            <span className="modal-total">Total price of your purchase: {totalPrice} EUR</span>
            <select name="delivery" className="modal-select" onChange={this.handleSelect}>
              <option value = "options" >Delivery options</option>
              <option value="self">I will pick it up myself - 0 EUR</option>
              <option value="express">Express delivery (2 hrs) - 5 EUR</option>
              <option value="standard">Standart delivery (6hrs) - 2 EUR</option>
            </select>
          </div>
          <ModalFooter className="modal-board__footer">
                <button className="button-main modal-btn-1"
                onClick={hideModal}>
                Continue shopping
                </button>
                <button className="button-main modal-btn-2"
                onClick={this.handlePaymentAction}
                disabled={this.state.disable}
                >
                Proceed to payment
                </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  }
}

export default CheckoutModal
