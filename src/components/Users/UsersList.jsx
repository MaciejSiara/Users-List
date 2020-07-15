import React from "react";
import User from "./User";

const UsersList = props => {

   const displayUsers = props.users.map(user => {
      return (
         <User
            key={user.id}
            id={user.id}
            name={user.name}
            username={user.username}
            city={user.address.city}
            email={user.email}
            userEdit={props.userEdit}
            userDelete={() => props.userDelete(user.id)}
            link="/edit"
         />
      );
   });

   return <tbody>{displayUsers}</tbody>;
};

export default UsersList;
