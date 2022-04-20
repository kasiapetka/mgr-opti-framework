import React, { Fragment } from "react";
import Backdrop from "./Backdrop";

type Props = {
  show: boolean;
  modalClosed: () => void;
  children: any;
};

const Modal = (props: Props) => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className="Modal"
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default Modal;
