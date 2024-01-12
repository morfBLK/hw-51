import React from "react";
import "./Number.css"

interface NumberProps {
  number:number
}

const Number: React.FC<NumberProps> = props => {
  return (
    <div className="number">
      <p>{props.number}</p>
    </div>
  );
};

export default Number;