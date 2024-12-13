import React from "react";
import { Button } from "react-bootstrap";
import "./CustomButton.css";

const CustomButton = (props) => {
  const { title } = props;
  return (
    <div>
      <div className="btn-wrapper">
        <Button>{title}</Button>
      </div>
    </div>
  );
};

export default CustomButton;
