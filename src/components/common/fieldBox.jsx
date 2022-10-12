import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import InputBox from "./inputbox";
import "./fieldBox.css";

function FieldBox({
  firstLabel,
  secondLabel,
  backColor,
  clickHandler,
  name,
  dropDown,
}) {
  const [hobbies, setHobbies] = useState([]);

  const addInputFields = () => {
    setHobbies((prevHobby) => [...prevHobby, {}]);
  };

  const removeInputField = (e) => {
    setHobbies((prevHobby) =>
      prevHobby.filter((hobb) => prevHobby.indexOf(hobb) !== e)
    );
  };

  return (
    <Row style={{ backgroundColor: backColor }} className="fieldBoxRow">
      <Col xl={7}>
        <InputBox label={firstLabel} type="text" />
        {name && <InputBox label={secondLabel} type="text" />}
        {dropDown && (
          <>
            <Form.Label>Dropdown Options</Form.Label>{" "}
            <Button className="fieldCloseName" onClick={addInputFields}>
              +
            </Button>
            {hobbies.map((hobby, index) => {
              return (
                <Row key={index} className="dropdownBtn">
                  <Col xl={10}>
                    <InputBox />
                  </Col>
                  <Col xl={2}>
                    <Button
                      className="fieldCloseName"
                      onClick={() => removeInputField(index)}
                    >
                      x
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </>
        )}{" "}
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
