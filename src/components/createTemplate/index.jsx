import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import FieldBox from "../common/fieldBox";
import InputBox from "../common/inputbox";
import Header from "../Header";
import "./index.css";

function CreateTemplate() {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
    required: "",
    toggle: false,
  });
  const [hobbies, setHobbies] = useState(false);

  return (
    <div className="templateBody">
      <Row className="templateRow">
        <Col xl={2} className="toolbox">
          <h4>ToolBox</h4>
          <Button
            variant="link"
            onClick={() => setName({ ...name, toggle: true })}
          >
            Text Field
          </Button>
          <Button variant="link" onClick={() => setHobbies(!hobbies)}>
            Drop Down
          </Button>
        </Col>
        <Col xl={6}>
          <div className="templatecontainer">
            <Header name={"CREATE TEMPLATE"} />
            <Col xl={8}>
              <InputBox label={"Template Name"} type={"type"} />
            </Col>
            {name.toggle && (
              <FieldBox
                firstLabel={"First Name"}
                secondLabel={"Second Name"}
                backColor={"pink"}
                firstChange={(e) =>
                  setName({ ...name, firstName: e.target.value })
                }
                firstValue={name.firstName}
                secondChange={(e) =>
                  setName({ ...name, lastName: e.target.value })
                }
                secondValue={name.lastName}
                clickHandler={() => setName(false)}
                name={true}
              />
            )}
            {hobbies && (
              <FieldBox
                firstLabel={"First Name"}
                secondLabel={"Second Name"}
                backColor={"white"}
                clickHandler={() => setHobbies(false)}
                name={false}
                dropDown={true}
              />
            )}
          </div>
          <Row className="buttonRow">
            <Col xl={2}>
              <Button variant="primary">Preview</Button>
            </Col>
            <Col xl={2}>
              <Button variant="success">Submit</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CreateTemplate;
