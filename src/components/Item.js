import React from "react";
import { Button, Card, Row, Col } from "react-bootstrap";

class Item extends React.Component {
  render() {
    const { title, vignette } = this.props;
    return (
      <div>
        <Row>
          <div class="col col-lg-2">
            <img src={vignette} alt="image" width="60px" height="auto" />
          </div>
          <Col>
            <h4 class="text-left">{title}</h4>
          </Col>
        </Row>
        <hr />
      </div>
    );
  }
}

export default Item;
