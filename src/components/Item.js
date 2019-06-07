import React from "react";
import { Button, Card } from "react-bootstrap";

class Item extends React.Component {
  render() {
    const { title, description, vignette, url } = this.props;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={vignette} alt="image" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button variant="primary" src={url}>Regardez</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default Item;
