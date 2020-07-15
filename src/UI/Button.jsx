import React from "react";
import styles from "./button.module.css";

const Button = props => {
   return (
      <button
         className={[styles.Button, styles[props.btnStyleType]].join(" ")}
         onClick={props.clicked}
         disabled={props.disabled}
         type={props.type}
      >
         {props.children}
      </button>
   );
};

export default Button;
