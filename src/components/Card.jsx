import { Col, Button } from "react-bootstrap";
import Modal from "./Modal";

function Card(props) {
  return (
    <Col className="col p-3 col-4" style={{ minWidth: "250px" }}>
      <div className="card p-3 text-center mb-5 bg-dark text-white border-warning">
        <h2>{props.color} {props.design} {props.type}</h2>
        <img src={props.imgURL} alt={props.type} style={{ width: '90%', height: '90%', margin: '0 auto' }} />
        <p>{props.description}</p>
        <Button
          className="btn btn-warning border-success border-5"
          data-bs-toggle="modal"
          data-bs-target={"#cardModal" + props.cardID}
        >
          Place Order
        </Button>

        <Modal
          key={props.cardID}
          cardID={props.cardID}
          color={props.color}
          design={props.design}
          type={props.type}
          imgURL={props.imgURL}
          price={props.price}
        />
      </div>
    </Col>
  );
}

export default Card;
