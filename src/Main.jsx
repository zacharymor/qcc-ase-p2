import { Container } from "react-bootstrap";

function Main({ children }) {
    return <Container className="my-5">{children}</Container>;
  }

export default Main;