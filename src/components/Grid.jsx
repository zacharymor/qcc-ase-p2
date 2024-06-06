import { Container, Row } from "react-bootstrap";
import cards from "../cards";
import Card from "./Card";

function createCard(val) {
    return (
        <Card
            key={val.cardID}
            cardID={val.cardID}
            color={val.color}
            type={val.type}
            imgURL={val.imgURL}
            price={val.price}
        />
    );
}


const Grid = () => {
    return (
        <Container className="">
            <Row className="d-flex flex-wrap justify-content-center">
                {cards.map(createCard)}
            </Row>
        </Container>
    );
};

export default Grid