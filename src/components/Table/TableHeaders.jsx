import React from "react";
import styles from "./tableHeader.module.css";

const TableHeaders = props => {
   const tHeads = ["id", "Name", "Username", "Email", "City", "Edit", "Delete"];
   const icon = <>&#9661;</>;

   let tHeadsContainer = tHeads.map(head =>
      head === "Username" ? (
         <th key={head} onClick={props.sort} className={styles.Username}>
            {head} {icon}
         </th>
      ) : (
         <th key={head}>{head}</th>
      )
   );

   return (
      <thead>
         <tr>{tHeadsContainer}</tr>
      </thead>
   );
};

export default TableHeaders;
