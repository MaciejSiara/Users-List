import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { connect } from "react-redux";

import FormGroup from "./FormGroup";
import Button from "../../UI/Button";
import styles from "./userForm.module.css";

import { initialControls, initialUser } from "../../utilities/initialObjects";

const FormComponent = props => {
   const [controls, setControls] = useState(initialControls);
   const [user, setUser] = useState(initialUser);
   const [validated, setValidated] = useState(false);

   const checkValidation = event => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
         event.preventDefault();
         event.stopPropagation();
         setValidated(true);
         return;
      }
      event.preventDefault();
      props.onSubmitHandler(user);
   };

   const inputChangedHandler = (inputEl, event) => {
      const updatedControls = {
         ...controls,
         [inputEl]: {
            ...controls[inputEl],
            value: event.target.value,
         },
      };

      setControls(updatedControls);
      setUser({
         ...user,
         name: updatedControls.name.value,
         email: updatedControls.email.value,
      });
   };

   const loading = props.loading ? <span>Loading...</span> : null;

   return (
      <Form onSubmit={checkValidation} noValidate validated={validated}>
         <FormGroup
            id="email"
            label="Email address"
            config={controls.email}
            changed={e => inputChangedHandler("email", e)}
            invalidLabel="Invalid email"
         />

         <FormGroup
            id="name"
            label="Name"
            config={controls.name}
            changed={e => inputChangedHandler("name", e)}
         />

         <div className={styles.ButtonsContainer}>
            <Button
               btnStyleType="Cancel"
               clicked={props.onCancelHandler}
               type="button"
            >
               Cancel
            </Button>
            <Button btnStyleType="Submit">Submit</Button>
         </div>
         <div className={styles.LoadingText}>{loading}</div>
      </Form>
   );
};

const mapStateToProps = state => {
   return {
      loading: state.loading,
   };
};

export default connect(mapStateToProps, null)(FormComponent);
