import * as actionTypes from "../actions/actionTypes.js";
import { upObject } from "../utility";

const initialState = {
   users: [],
   loading: false,
   updatedUser: false,
   error: false,
};

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case actionTypes.FETCH_USERS_START:
         return fetchUsersStart(state, action);

      case actionTypes.FETCH_USERS_SUCCESS:
         return fetchUsersSuccess(state, action);

      case actionTypes.DELETE_USER_START:
         return deleteUserStart(state, action);

      case actionTypes.DELETE_USER_SUCCESS:
         return deleteUserSuccess(state, action);

      case actionTypes.UPDATE_USER_INIT:
         return addUserInit(state, action);

      case actionTypes.ADD_USER_START:
         return addUserStart(state, action);

      case actionTypes.ADD_USER_SUCCESS:
         return addUserSuccess(state, action);

      case actionTypes.EDIT_USER_START:
         return editUserStart(state, action);

      case actionTypes.EDIT_USER_SUCCESS:
         return editUserSuccess(state, action);

      case actionTypes.SORT_USERS:
         return sortUsersByUsername(state, action);

      default:
         return state;
   }
};

const fetchUsersStart = (state, action) => {
   return upObject(state, { loading: true });
};

const fetchUsersSuccess = (state, action) => {
   return upObject(state, {
      users: action.users,
      error: false,
      loading: false,
   });
};

const deleteUserStart = (state, action) => {
   return upObject(state, { loading: true });
};

const deleteUserSuccess = (state, action) => {
   const updatedUsers = state.users.filter(user => user.id !== action.userId);
   const newUsers = { ...state, ...{ users: updatedUsers, loading: false } };
   console.log(newUsers);

   return upObject(state, { users: updatedUsers, loading: false });
};

const addUserInit = (state, action) => {
   return upObject(state, { updatedUser: false });
};

const addUserStart = (state, action) => {
   return upObject(state, { loading: true });
};

const addUserSuccess = (state, action) => {
   const updatedUsers = [...state.users, action.userData];
   console.log(updatedUsers);

   return upObject(state, {
      users: updatedUsers,
      loading: true,
      updatedUser: true,
   });
};

const editUserStart = (state, action) => {
   return upObject(state, { loading: true });
};

const editUserSuccess = (state, action) => {
   return upObject(state, { updatedUser: true, loading: true });
};

const sortUsersByUsername = (state, action) => {
   let sortedUsers = [];
   sortedUsers = [...state.users];
   sortedUsers.sort((a, b) => {
      if (a.username < b.username) {
         return action.order===true ? -1 : 1;
      }
      if (a.username > b.username) {
         return action.order===true ? 1 : -1;
      }
      return 0;
   });
   return upObject(state, { users: sortedUsers });
};

export default reducer;
