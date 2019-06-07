import React from "react";

class Video extends React.Component {
  render() {
    const { Videourl } = this.props;
    return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe
          width="560"
          height="315"
          src={Videourl}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    );
  }
}

export default Video;
