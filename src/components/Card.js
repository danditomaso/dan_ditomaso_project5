import React from "react";
import { stringify } from "querystring";
import { flattenArr } from "./helpers";

const Card = (props) => {
  const { selected, id, solved, image, click } = props;
  // console.log(solved);
  const solvedArr = flattenArr(solved);
  const match =
    selected.includes(id.toString()) || solvedArr.includes(id.toString());
  return (
    <div className={match ? "card selected" : "card"} onClick={click} id={id}>
      <div className="front" id={id}>
        ?
      </div>
      <div className="back" id={id}>
        <img className="card-image" src={image} />
      </div>
    </div>
  );
};
export default Card;
