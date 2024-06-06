import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div>
        <Navbar bg="dark" variant="dark" expand="lg" className="px-5">
          <Navbar.Brand as={Link} to="/">
            SPACEwendys
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
            <button className="btn text-white pe-3 ms-auto" data-bs-target="#kiwi" data-bs-toggle="modal">Log In</button>
          </Navbar.Collapse>
        </Navbar>
        <div className="text-center">
          <span className="animated-badge badge text-bg-success rounded-pill mb-5">
            Welcome to SPACEwendys
          </span>
        </div>
      </div>

      <div className="modal" id="kiwi">
        <div className="modal-dialog">
          <div className="modal-content px-4 py-4 bg-success">
            <div className="container-fluid bg-success">
              <h1 className='text-center'>Select an option</h1>
              <ul className="nav nav-pills nav-fill gap-2 p-1 small bg-dark rounded-5 shadow-sm" id="pillNav2" role="tablist" style={{ "--bs-nav-link-color": "var(--bs-white)", "--bs-nav-pills-link-active-color": "var(--bs-dark)", "--bs-nav-pills-link-active-bg": "var(--bs-white)" }}>
                <li className="nav-item" role="presentation">
                  <button className="nav-link active rounded-5 " id="logIn-tab2" data-bs-toggle="tab" data-bs-target="#logIn" type="button" role="tab" aria-controls="logIn" aria-selected="true">Log In</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link rounded-5" id="signUp-tab2" data-bs-toggle="tab" data-bs-target="#signUp" type="button" role="tab" aria-controls="signUp" aria-selected="false">Sign Up</button>
                </li>
              </ul>

              <div className="tab-content mt-3">
                <div className="tab-pane fade show active" id="logIn" role="tabpanel" aria-labelledby="logIn-tab2">
                  <form id="login-form">
                    <div className="form-group">
                      <label htmlFor="login-email"></label>
                      <input type="email" className="form-control mb-3" id="login-email" aria-describedby="emailHelp" placeholder="Email address" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="login-password" style={{ display: "none" }}></label>
                      <input type="password" className="form-control" id="login-password" placeholder="Password" required />
                    </div>
                    <div className="form-group form-check p-3 ">
                      <input type="checkbox" className="form-check-input" id="login-staySignedIn" />
                      <label className="form-check-label" htmlFor="login-staySignedIn">Stay signed in?</label>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-dark" type="submit">Log In</button>
                      <button className="btn btn-dark" data-bs-dismiss="modal" type="button">Close</button>
                    </div>
                  </form>
                </div>
                <div className="tab-pane fade" id="signUp" role="tabpanel" aria-labelledby="signUp-tab2">
                  <form id="signup-form">
                    <div className="form-group">
                      <label htmlFor="signup-firstname"></label>
                      <input type="text" className="form-control" id="signup-firstname" placeholder="First name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-lastname"></label>
                      <input type="text" className="form-control" id="signup-lastname" placeholder="Last name" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-email"></label>
                      <input type="email" className="form-control mb-4" id="signup-email" aria-describedby="emailHelp" placeholder="Email address" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="signup-password" style={{ display: "none" }}></label>
                      <input type="password" className="form-control" id="signup-password" placeholder="Password" required />
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                      <button className="btn btn-dark mt-4" type="submit">Sign Up</button>
                      <button className="btn btn-dark" data-bs-dismiss="modal" type="button">Close</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
