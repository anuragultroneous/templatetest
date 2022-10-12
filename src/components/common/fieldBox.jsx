import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import InputBox from "./inputbox";
import "./fieldBox.css";

function FieldBox({ firstLabel, secondLabel, backColor, clickHandler }) {
  return (
    <Row style={{ backgroundColor: backColor }} className="fieldBoxRow">
      <Col xl={7}>
        <InputBox label={firstLabel} type="text" />
        <InputBox label={secondLabel} type="text" />
      </Col>
      <Col xl={4} className="fieldBoxCheck">
        <Form.Check />
        <Form.Label>Required</Form.Label>
      </Col>
      <Col xl={1}>
        <Button className="fieldCloseName" onClick={clickHandler}>
          &times;
        </Button>
      </Col>
    </Row>
  );
}

export default FieldBox;
