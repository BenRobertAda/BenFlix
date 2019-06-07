import { Component, Button, Card, Row, Col, Navbar, NavItem, Dropdown, Divider, a, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import React from 'react';

class Video extends React.Component {
  render() {
  const { url } = this.props;
   return(
    <iframe width="560" height="315" src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

);
}
}

export default Video;