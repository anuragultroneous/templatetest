import React from "react";
import { Form } from "react-bootstrap";
import "./inputbox.css";

function InputBox({ label, type, placeholder, value, changeHadler }) {
  return (
    <Form className="formInput">
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={changeHadler}
      />
    </Form>
  );
}

export default InputBox;
