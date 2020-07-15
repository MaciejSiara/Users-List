import React from "react";
import Backdrop from "./Backdrop";
import Button from "../UI/Button";
import styles from "./popup.module.css";

const PopUp = props => {
   return (
      <>
         <Backdrop show={props.show} />
         <div className={styles.PopUp}>
            {props.children}
            <div
               style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "25px",
               }}
            >
               <Button btnStyleType="Cancel" clicked={props.cancelClicked}>
                  Cancel
               </Button>
               <Button btnStyleType="Delete" clicked={props.deleteClicked}>
                  Delete
               </Button>
            </div>
         </div>
      </>
   );
};
export default React.memo(
   PopUp,
   (prevProps, nextProps) => nextProps.show === prevProps.show
);
