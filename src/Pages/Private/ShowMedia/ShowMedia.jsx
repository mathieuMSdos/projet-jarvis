import apiEndPoints from "../../../Utils/utilsApi";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BtnPreviousPage } from "../../../Components/UI-components/BtnPreviousPage/BtnPreviousPage";

export const ShowMedia = () => {
  const [favorite, setFavorite] = useState(false);
  const [mediaDatas, setMediaDatas] = useState("");

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  //to catch id from url (react router dom hook)
  const params = useParams();

  // console.log(params);

  useEffect(() => {
    // ORIGINAL
    // axios
    //   .get(`http://localhost:3000/${params.endPoint}/${params.id}`)
    //   .then((res) => {
    //     if (res) {
    //       setMediaDatas(res.data);
    //     }
    //   });

    // BACK CONNECTED

    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (token) {
      axios
        .get(`${apiEndPoints.apiAdress}${params.endPoint}/${params.id}`, config)
        .then((res) => {
          setMediaDatas(res.data);
        });
    }
  }, []);

  console.log(mediaDatas);

  return (
    <motion.div
      className="showMedia__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="showMedia__content-container">
        <div className="showMedia__img-container">
          <motion.img
            src={`https://image.tmdb.org/t/p/w500${mediaDatas.poster_path}`}
            alt="cover-img"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          />
        </div>

        <div className="mediaShow__text-container">
          <motion.div
            className="mediaShow__card-header"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <BtnPreviousPage />
            <h1>{mediaDatas.title}</h1>
          </motion.div>
          <motion.div
            className="mediaShow__text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <div className="mediaShow__title-container">
              <h4>
                <span>Titre</span>
              </h4>
              <p>{mediaDatas.title}</p>
            </div>

            <motion.div
              className="overview__container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.8 }}
            >
              <h4>
                <span>Résumé du film</span>
              </h4>
              {mediaDatas.overview ? (
                <div className="overview">
                  <p>{mediaDatas.overview}</p>
                </div>
              ) : (
                "Nous somme désolé mais aucun résumé n'est disponible pour ce film"
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* <div className="show-media__icons">
            <i
              onClick={toggleFavorite}
              className={favorite ? "ri-heart-line" : "ri-heart-add-line"}
            ></i>
            <i className="ri-pencil-line"></i>
            <i className="ri-delete-bin-5-line"></i>
          </div> */}
      </div>
    </motion.div>
  );
};
