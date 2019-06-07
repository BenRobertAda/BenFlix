import Table from "react-bootstrap/Table";
import React from "react";
import Item from "./Item";
import Video from "./video";
import { Row, Col } from "react-bootstrap";
import Detail from "./videodetail";

class List extends React.Component {
  state = {
    result: [],
    isLoad: true,
    Videourl: "",
    Videotitle: "",
    Videodescription: ""
  };
  componentWillMount() {
    fetch("http://localhost:8000/api/film")
      .then(res => res.json())
      .then(data => this.setState({ result: data, isLoad: false }));
  }

  render() {
    const {
      result,
      isLoad,
      Videourl,
      Videotitle,
      Videodescription
    } = this.state;

    const renderItem = !isLoad ? (
      result.data.map(item => {
        return (
          <div
            className="Video-item"
            key={item.id}
            onClick={() =>
              this.setState({
                Videourl: item.url,
                Videotitle: item.title,
                Videodescription: item.description
              })
            }
            onLoad={() =>
              this.setState({
                Videourl: result.data[0].url,
                Videotitle: result.data[0].title,
                Videodescription: result.data[0].description
              })
            }
          >
            <Item title={item.title} vignette={item.vignette} />
          </div>
        );
      })
    ) : (
      <p>Chargement de données en cours...</p>
    );

    return (
      <Row>
        <Col md={{ span: 8, offset: 0 }}>
          <Video Videourl={Videourl} />
          <Detail titre={Videotitle} description={Videodescription} />
        </Col>
        <Col md={{ span: 3, offset: 0 }}>{renderItem}</Col>
      </Row>
    );
  }
}

export default List;
