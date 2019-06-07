import {
  Component,
  Button,
  Card,
  Row,
  Col,
  Navbar,
  NavItem,
  Dropdown,
  Divider,
  a,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from "react-bootstrap";
import React from "react";
import ModalForm from "./Modal-form";

const Header = () => {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">Benflix</Navbar.Brand>
      <ModalForm />
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Ma Liste</Nav.Link>
        <Nav.Link href="#pricing">Series</Nav.Link>
        <Nav.Link href="#pricing">Film</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-light">Search</Button>
      </Form>
    </Navbar>
  );
};
export default Header;
