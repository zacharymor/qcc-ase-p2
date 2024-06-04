import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import cards from './cards';

function Header() {
  return (
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
    <div
      className="cardStyle p-3"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>
        Card {props.cardID} {props.cardName} {props.cardSpeices}
      </h1>
      <img src={props.imgURL} alt={props.cardSpeices} />
      <p>{props.descrption}</p>
      <button
        style={{
          color: "#fff",
          backgroundColor: "#000",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontSize: "16px",
          transition: "background-color 0.3s ease",
        }}
      >
        Learn More {props.cardID}
      </button>
    </div>
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
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
      }}
    >
      {cards.map(createCard)}
    </div>
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
      <h1>Home Page</h1>
      <p>Welcome to the Home page!</p>
      <Grid /> {/* Add Grid component here */}
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
