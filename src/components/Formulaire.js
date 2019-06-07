import React from "react";
import { Form, Button, Modal } from "react-bootstrap";

class Formulaire extends React.Component {
  state = {
    title: "",
    description: "",
    vignette: "",
    url: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    //event.preventDefault();
    console.log("Le nom a été soumis :" + JSON.stringify(this.state));
    const { title, description, vignette, url } = this.state;
    fetch("http://localhost:8000/api/film", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        description: description,
        vignette: vignette,
        url: url
      })
    })
      .then(res => console.log(res.json))
      .catch(err => console.log(err));
  };

  render() {
    const { title, description, vignette, url } = this.state;
    return (
      <Modal.Dialog>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titre du film"
                name="title"
                value={title}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Description..."
                name="description"
                value={description}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Image..."
                name="vignette"
                value={vignette}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Form.Group controlId="url">
              <Form.Label>URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="URL..."
                name="url"
                value={url}
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}

export default Formulaire;
