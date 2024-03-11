import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

//Navbar
const Topbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navbar
        expand="md"
        style={{
          backgroundColor: "#1976D2",
          color: "#FFFFFF",
        }}
      >
        <Container fluid>
          <Navbar.Brand onClick={() => navigate("/")}>
            <div style={{ fontSize: "30px" }}>Library Management System</div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate("/")}>
                <b className="btn btn-light">Home</b>
              </Nav.Link>
              <Nav.Link onClick={() => navigate("/dashboard-author")}>
                <b className="btn btn-light">Author's Dashboard</b>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
