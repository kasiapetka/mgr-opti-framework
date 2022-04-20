import React, { Fragment } from "react";

type Props = {
  show: boolean;
  clicked: () => void;
};

const Backdrop = (props: Props) => {
  return (
    <Fragment>
      {props.show ? (
        <div className="Backdrop" onClick={props.clicked}></div>
      ) : null}
    </Fragment>
  );
};

export default Backdrop;
