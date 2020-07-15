import React from "react";
import { Form } from "react-bootstrap";

const FormGroup = props => {
   return (
      <Form.Group controlId={props.id}>
         <Form.Label>{props.label}</Form.Label>
         <Form.Control
            required
            type={props.config.type}
            placeholder={props.config.placeholder}
            value={props.config.value}
            onChange={props.changed}
         />
         <Form.Control.Feedback type="invalid">
            {props.invalidLabel}
         </Form.Control.Feedback>
      </Form.Group>
   );
};

export default FormGroup;
