import { useDispatch } from "react-redux";
import { setmediaWheelRandom } from "../../../ReduxToolKit/Reducers/mediaWheelRandom.slice";
import { motion } from "framer-motion";

export const BtnRandomMediaWheel = ({ mediaListData, randomItem, bgColor }) => {
  const dispatch = useDispatch();

  const handleClick = (arr) => {
    randomItem(arr);
    dispatch(setmediaWheelRandom(randomItem(arr)));
  };

  return (
    <div className="button__randomMediaWheel-container">
      <button

        type="submit"
        onClick={() => handleClick(mediaListData)}
        className="button__randomMediaWheel"
      >
        <p> Film au hasard</p>
      </button>
    </div>
  );
};
