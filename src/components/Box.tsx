import { BoxProp } from "../types/types";

import circle from "../assets/circle.png"
import cross from "../assets/cross.png"

const Box: React.FC<BoxProp> = ({ boxText, handleOnClick }) => {
  return (
    <article className="box" onClick={handleOnClick}>
      {boxText !== "" && (
        <img className="box-img" src={boxText === "circle" ? circle : cross} />
      )}
    </article>
  );
};

export default Box;
