import { Form } from "react-bootstrap";
import React from "react";

class Detail extends React.Component {
  render() {
    const { titre, description } = this.props;
    return (
      <div>
        <div>
          <h1>{titre}</h1>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}
export default Detail;
