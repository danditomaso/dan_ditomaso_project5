import React from "react";
const Score = (props) => {
  return (
    <h4 className="score">
      {props.name} Score: {props.score}
    </h4>
  );
};

export default Score;
