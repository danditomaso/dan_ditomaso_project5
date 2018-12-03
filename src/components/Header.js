import React from "react";
import Score from "./Score";

const Header = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <Score score={props.currentScore} name={props.playerName} />
    </div>
  );
};

export default Header;
