import { Button, Col, Row } from "react-bootstrap";
import "./index.css";

const Header = ({ name, button }) => {
  return (
    <Row className="header">
      <div className="section">
        <Col xl={8}>
          <div className="Title">
            <h1>{name}</h1>
          </div>
        </Col>
        <Col xl={4}>{button ? <Button>Create</Button> : null}</Col>
      </div>
    </Row>
  );
};

export default Header;
