import * as actionTypes from "./actionTypes";
import axios from "axios";

const API_URL =
   "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

// const API_URL = "https://zadanie-8bb54.firebaseio.com/";

export const fetchUsersStart = () => {
   return {
      type: actionTypes.FETCH_USERS_START,
   };
};

export const fetchUsersSuccess = users => {
   return {
      type: actionTypes.FETCH_USERS_SUCCESS,
      users: users,
   };
};

export const deleteUserStart = () => {
   return {
      type: actionTypes.DELETE_USER_START,
   };
};

export const deleteUserSuccess = userId => {
   return {
      type: actionTypes.DELETE_USER_SUCCESS,
      userId: userId,
   };
};

export const updateUserInit = () => {
   return {
      type: actionTypes.UPDATE_USER_INIT,
   };
};

export const addUserStart = () => {
   return {
      type: actionTypes.ADD_USER_START,
   };
};

export const addUserSuccess = (id, userData) => {
   const updatedUserData = { ...userData, id: id };
   return {
      type: actionTypes.ADD_USER_SUCCESS,
      userData: updatedUserData,
   };
};

export const editUserSuccess = () => {
   return {
      type: actionTypes.EDIT_USER_SUCCESS,
   };
};

export const editUserStart = () => {
   return {
      type: actionTypes.EDIT_USER_START,
   };
};

export const fetchUsers = () => {
   return dispatch => {
      dispatch(fetchUsersStart());
      axios
         .get(API_URL)
         .then(res => {
            dispatch(fetchUsersSuccess(res.data));
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const deleteUser = userId => {
   console.log("deleting...");

   return dispatch => {
      dispatch(deleteUserStart());
      axios
         .delete(`${API_URL}/${userId}`)
         .then(res => {
            dispatch(deleteUserSuccess(userId));
            console.log("deleted");
         })
         .catch(error => console.log(error));
   };
};

export const addUser = (url, userData) => {
   console.log("add...");

   return dispatch => {
      dispatch(addUserStart());
      axios
         .post(url, userData)
         .then(res => {
            dispatch(addUserSuccess(res.data.id, userData));
            console.log("added");
         })
         .catch(error => {
            console.log(error);
         });
   };
};

export const editUser = (url, userData) => {
   console.log("edit...");

   return dispatch => {
      dispatch(editUserStart());
      axios
         .put(url, { name: userData.name, email: userData.email })
         .then(res => {
            console.log(res.data);

            dispatch(editUserSuccess());
            console.log("edited");
         })
         .catch(error => console.log(error));
   };
};

export const sortByUsername = order => {
   return {
      type: actionTypes.SORT_USERS,
      order: order,
   };
};
