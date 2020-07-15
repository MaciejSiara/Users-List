import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Table } from "react-bootstrap";

import PopUp from "../../UI/PopUp";
import UsersList from "../../components/Users/UsersList";
import TableHeaders from "../../components/Table/TableHeaders";
import Button from "../../UI/Button";
import * as actions from "../../store/actions/users";
import styles from "./dashboard.module.css";

const Dashboard = props => {
   const [toDelete, setToDelete] = useState(null);
   const [sortOrder, setSortOrder] = useState(false);

   useEffect(() => {
      props.onFetchUsers();
      console.log("fetching...");
   }, []);

   const deleteUserHandler = () => {
      props.onDeleteUser(toDelete);
      setToDelete(null);
   };

   const updateUserInit = () => {
      props.updateUserInit();
   };

   const sortUsernames = () => {
      setSortOrder(!sortOrder);
      props.onSortUsersByName(sortOrder);
   };

   let users = props.error ? "Coś poszło nie tak" : <span>Loading...</span>;

   if (props.users && !props.loading) {
      users = (
         <>
            <div className={styles.AddUser}>
               <NavLink to={`/AddUser`}>
                  <Button btnStyleType="Add" clicked={updateUserInit}>
                     Add User
                  </Button>
               </NavLink>
            </div>
            <Table striped bordered hover>
               <TableHeaders sort={sortUsernames} />
               <UsersList
                  users={props.users}
                  userDelete={id => setToDelete(id)}
                  userEdit={updateUserInit}
               />
            </Table>
         </>
      );
   }

   return (
      <>
         {toDelete && (
            <PopUp
               cancelClicked={() => setToDelete(null)}
               deleteClicked={deleteUserHandler}
            >
               Czy na pewno chcesz usunąć?
            </PopUp>
         )}
         {users}
      </>
   );
};

const mapStateToProps = state => {
   return {
      loading: state.loading,
      users: state.users,
      error: state.error,
   };
};

const mapDispatchToProps = dispatch => {
   return {
      onFetchUsers: () => dispatch(actions.fetchUsers()),
      onDeleteUser: userId => dispatch(actions.deleteUser(userId)),
      updateUserInit: () => dispatch(actions.updateUserInit()),
      onSortUsersByName: order => dispatch(actions.sortByUsername(order)),
   };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
