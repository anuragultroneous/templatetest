import { Button, Col, Row } from "react-bootstrap";
import "./index.css";

const Header = ({ name, button }) => {
  return (
    <div className="mainSection">
      <Row className="mainRow">
        <div className="section">
          <Col xl={6}>
            <div className="title">
              <h1>{name}</h1>
            </div>
          </Col>
          <Col xl={6} className="buttonSection">
            {button ? <Button className="create">Create</Button> : null}
          </Col>
        </div>
        <Row className="listRow">
          <Col xl={12}>
            <div className="listSection">
              <p className="listTitle">Template name</p>
            </div>
          </Col>
        </Row>
      </Row>
    </div>
  );
};

export default Header;
