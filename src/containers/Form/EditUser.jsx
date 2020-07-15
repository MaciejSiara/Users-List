import React from "react";

import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import queryString from "query-string";
import FormComponent from "../../components/Form/FormComponent";

import * as actions from "../../store/actions/users";
import styles from "./updateUser.module.css";

const UserForm = React.memo(props => {
   const queryParams = queryString.parse(props.location.search);
   const API_URL = `https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data/${queryParams.userId}`;

   const submitFormHandler = (user) => {
      props.onEditUser(API_URL, user);
   };

   const cancelHandler = () => {
      props.history.goBack();
   };

   const addedUser = props.updatedUser ? <Redirect to="/" /> : null;

   return (
      <>
         {addedUser}
         <div className={styles.Form}>
            <p className={styles.Mode}>Edit User</p>
            <FormComponent
               canceled={cancelHandler}
               onSubmitHandler={(user)=>submitFormHandler(user)}
               onCancelHandler={cancelHandler}
            />
         </div>
      </>
   );
});

const mapStateToProps = state => {
   return {
      updatedUser: state.updatedUser,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onEditUser: (url, user) => dispatch(actions.editUser(url, user)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
