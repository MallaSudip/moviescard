import React from "react";
import { Nav, Button, Container, Form, Navbar } from "react-bootstrap";
import "../css/navcss.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
  <>
  <Navbar fixed="top" expand="lg" className="navContainer">
    <Container fluid className="con">
      <Navbar.Brand className="brand">
        Movie <br />
        card
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto" navbarScroll>
          <Link to="/" id="home">
            Home
          </Link>
          <Link to={"/movie/popular"} >
            Popular Movies
          </Link>
          <Link to={"/movie/top_rated"}>
            Top Rated
          </Link>
          <Link to={"/movie/upcoming"}>
            Upcoming Movies
          </Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search Movies"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>

  </>
  );
};

export default Header;
