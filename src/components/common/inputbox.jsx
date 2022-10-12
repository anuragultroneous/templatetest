import React from "react";
import { Form } from "react-bootstrap";
import "./inputbox.css";

function InputBox({ label, type, placeholder }) {
  return (
    <Form className="formInput">
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} placeholder={placeholder} />
    </Form>
  );
}

export default InputBox;
