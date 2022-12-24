import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export const CardLastMediasAdded = ({ mediaDatas, endPoint, count }) => {
  const navigate = useNavigate();

  const delayValue = count * 0.1;

  return (
    <motion.div
      onClick={() =>
        navigate(`/private/private-show-media/${endPoint}/${mediaDatas.id}`)
      }
      className="cardLastMedias__container"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delayValue }}
    >
      <div className="cardLastMedias__img-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${mediaDatas.poster_path}`}
          alt=""
        />
      </div>
      <div className="cardLastMedias__content-container">
        <h1>{mediaDatas.title}</h1>
        <div className="resume__container">
          {mediaDatas.overview ? (
            <p>{mediaDatas.overview} </p>
          ) : (
            "Synopsis non disponible"
          )}
        </div>
      </div>
    </motion.div>
  );
};
