import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import cards from './cards';

function Header() {
  return (
    <div className='header'>

      <div>
        <Navbar bg="dark" variant="dark" expand="lg" className='px-5'>
          <Navbar.Brand as={Link} to="/">MyApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className=''> 
        <span class="animated-badge badge text-bg-success rounded-pill mb-5">Welcome to Space Wendy's</span>
      </div>
      </div>
    </div>


  );
}

function Main({ children }) {
  return (
    <Container className="my-5">
      {children}
    </Container>
  );
}

function Card(props) {
  return (
    <Col
      className="col p-3 col-4"
      style={{ minWidth: '250px' }}
    >
      <div className='card p-3 text-center mb-5'>
        <h1>
          Card {props.cardID} {props.cardName} {props.cardSpeices}
        </h1>
        <img src={props.imgURL} alt={props.cardSpeices} />
        <p>{props.descrption}</p>
        <Button>
          Learn More {props.cardID}
        </Button>
      </div>


    </Col>
  );
}

function createCard(val) {
  return (
    <Card
      key={val.cardID}
      cardID={val.cardID}
      cardName={val.name}
      imgURL={val.imgURL}
      cardType={val.species}
    />
  );
}

const Grid = () => {
  return (
    <Container className=''>
      <Row className='d-flex flex-wrap justify-content-center'>
        {cards.map(createCard)}
      </Row>
    </Container>

  );
};

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>&copy; 2024 MyApp. All rights reserved.</p>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <div class="jumbotron jumbotron-fluid mb-5">
        <h1 class="display-4">Hello, world!</h1>
        <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr class="my-4"></hr>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
      <h1>Buy stuff please</h1>
      <Grid />
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Learn more about us on this page.</p>
    </div>
  );
}

function Services() {
  return (
    <div>
      <h1>Services Page</h1>
      <p>Discover our services on this page.</p>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>Get in touch with us through this page.</p>
    </div>
  );
}

function App() {
  return (
    <Router basename="/qcc-ase-p2">
      <div>
        <Header />
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
