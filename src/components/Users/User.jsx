import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../UI/Button";


const User = props => {
   const queryParams = `?userId=${props.id}`;
   return (
      <tr>
         <td>{props.id}</td>
         <td>{props.name}</td>
         <td>{props.username}</td>
         <td>{props.city}</td>
         <td>{props.email}</td>
         <td>
            <NavLink to={`/editUser${queryParams}`}>
               <Button btnStyleType={"Edit"} clicked={props.userEdit}>
                  Edit
               </Button>
            </NavLink>
         </td>
         <td>
            <Button btnStyleType={"Delete"} clicked={props.userDelete}>
               delete
            </Button>
         </td>
      </tr>
   );
};

export default User;
