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
  firstValue,
  firstChange,
  secondChange,
  secondValue,
}) {
  const [dropdown, setDropdown] = useState({
    name: "",
    options: [],
    required: false,
    toggle: false,
  });

  const addInputFields = () => {
    setDropdown({
      ...dropdown,
      options: [...dropdown.options, { hobbie: "" }],
    });
  };

  const removeInputField = (e) => {
    let updatedHobby = dropdown.options.filter(
      (hobby) => dropdown.options.indexOf(hobby) !== e
    );

    setDropdown({ ...dropdown, options: updatedHobby });
  };

  const addingTheValue = (e, index) => {
    const value = e.target.value;

    const updatedHobbie = {
      id: index,
      task: value,
    };

    const updatedItem = dropdown.options.map((hobby) => {
      return dropdown.indexOf(hobby) === e ? updatedHobbie : hobby;
    });

    // saving the array
    setDropdown(updatedItem);
  };

  return (
    <Row style={{ backgroundColor: backColor }} className="fieldBoxRow">
      <Col xl={7}>
        <InputBox
          value={firstValue}
          changeHadler={firstChange}
          label={firstLabel}
          type="text"
        />
        {name && (
          <InputBox
            value={secondValue}
            changeHadler={secondChange}
            label={secondLabel}
            type="text"
          />
        )}
        {dropDown && (
          <>
            <Form.Label>Dropdown Options</Form.Label>{" "}
            <Button className="fieldCloseName" onClick={addInputFields}>
              +
            </Button>
            {dropdown.options.map((hobby, index) => {
              return (
                <Row key={index} className="dropdownBtn">
                  <Col xl={10}>
                    <InputBox
                      value={dropdown.options.hobbie}
                      changeHadler={(e) => addingTheValue(e, index)}
                    />
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
