import React, { Component } from "react";
import Modals from "react-responsive-modal";
import { Button, Modal } from "react-bootstrap";
import Formulaire from "./Formulaire";

class ModalForm extends Component {
  state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.onOpenModal}>Ajouter un nouveau Film</Button>
        <Modals open={open} onClose={this.onCloseModal} center>
          <Formulaire />
        </Modals>
      </div>
    );
  }
}

export default ModalForm;
