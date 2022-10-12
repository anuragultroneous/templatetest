import { Button, Col, Row } from "react-bootstrap";
import "./index.css";

const Header = ({ name, button }) => {
  return (
    <Row>
      <div className="section">
        <Col xl={6}>
          <div className="Title">
            <h1>{name}</h1>
          </div>
        </Col>
        <Col xl={6}>{button ? <Button>Create</Button> : null}</Col>
      </div>
    </Row>
  );
};

export default Header;
