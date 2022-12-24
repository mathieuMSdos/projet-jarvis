import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BtnAddMediaToLib } from "../../UI-components/BtnAddMediaToLib/BtnAddMediaToLib";
import { BtnDeleteMedia } from "../../UI-components/BtnDeleteMedia/BtnDeleteMedia";

export const SingleCard = ({
  mediaDatas,
  endPoint,
  count,
  showMedia,
  addMediaBtn,
  deleteMediaBtn,
}) => {
  // React router dom part :
  const navigate = useNavigate();

  //React part

  // to create a value to set delay in motion framer
  const delayValue = count * 0.1;

  return (
    <motion.div
      className="singleCard__global-container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delayValue }}
    >
      {deleteMediaBtn ? (
        <div className="deleteBtn__container">
          <BtnDeleteMedia mediaDatas={mediaDatas} />
        </div>
      ) : (
        ""
      )}

      <motion.div
        className="singleCard__container"
        style={showMedia ? "" : { cursor: "default" }}
        onClick={() => {
          showMedia &&
            navigate(
              `/private/private-show-media/${endPoint}/${mediaDatas.id}`
            );
        }}
      >
        <div className="singleCard__img-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${mediaDatas.poster_path}`}
            alt=""
          />
        </div>

        <div className="singleCard__content-container">
          <h1>{mediaDatas.title}</h1>
          <div className="resume__container">
            {mediaDatas.overview ? (
              <p>{mediaDatas.overview} </p>
            ) : (
              "Synopsis non disponible"
            )}
          </div>
          <div className="singleCard__btnAddMediaToLib-container">
            {addMediaBtn && <BtnAddMediaToLib mediaDatas={mediaDatas} />}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
