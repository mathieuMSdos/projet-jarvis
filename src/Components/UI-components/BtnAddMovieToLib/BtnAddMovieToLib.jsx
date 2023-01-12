import React, { useEffect, useState } from "react";
import apiEndPoints from "../../../Utils/utilsApi";
import { motion } from "framer-motion";
import axios from "axios";
import { useSelector } from "react-redux";

export const BtnAddMovieToLib = ({ mediaDatas }) => {
  // Redux part
  const addMovieSearchRedux = useSelector(
    (state) => state.addMovieSearch.addMovieSearch
  );

  //   react Part

  const [showAddBtn, setShowAddBtn] = useState(true);

  const mediaDataToAdd = {
    title: mediaDatas.title,
    poster_path: mediaDatas.poster_path,
    overview: mediaDatas.overview,
  };

  const btnActions = () => {
    // CODE WORKS WITH JSON SERVER BEFORE CONNECT TO THE BACKEND

    // // chekck if dataBase already contains the media that user try to add
    // // get dataBase medias
    // axios.get("http://localhost:3000/movies").then((res) => {
    //   // all title of movie in db
    //   const dBtitleList = res.data.map((item) => item.title.toLowerCase());
    //   // title of wanted media
    //   const titleToFind = mediaDataToAdd.title.toLowerCase();
    //   //   compare database title to media wanted title
    //   if (dBtitleList.includes(titleToFind)) {
    //     console.log("déja dans la database");
    //   } else {
    //     axios.post("http://localhost:3000/movies", mediaDataToAdd);
    //     setShowAddBtn(!showAddBtn);
    //   }
    // });

    // CODE WORKS AFTER CONNECTED FRONT AND BACK

    // chekck if dataBase already contains the media that user try to add
    // get dataBase medias
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (token) {
      axios
        .get(`${apiEndPoints.apiAdress}${apiEndPoints.movies}`, config)
        .then((res) => {
          console.log(res);
          // all title of movie in db
          const dBtitleList = res.data.map((item) => item.title.toLowerCase());
          // title of wanted media
          const titleToFind = mediaDataToAdd.title.toLowerCase();
          //   compare database title to media wanted title
          if (dBtitleList.includes(titleToFind)) {
            console.log("déja dans la database");
          } else {
            axios.post(
              `${apiEndPoints.apiAdress}${apiEndPoints.add_movie}`,
              mediaDataToAdd,
              config
            );
            setShowAddBtn(!showAddBtn);
          }
        });
    }
  };

  // Show addMedia button if movie is not in database but hide it if movie is already inside user database

  useEffect(() => {
    // CODE WORKS WITH JSON SERVER BEFORE CONNECT TO THE BACKEND

    // if (addMovieSearchRedux && addMovieSearchRedux !== "empty") {
    //   axios.get("http://localhost:3000/movies").then((res) => {
    //     // all title of movie in db
    //     const dBtitleList = res.data.map((item) => item.title.toLowerCase());

    //     // title of wanted media
    //     const titleToFind = mediaDataToAdd.title.toLowerCase();

    //     // find if data base contain this movie. If it is toggle
    //     if (dBtitleList.includes(titleToFind)) {
    //       setShowAddBtn(false);
    //     }
    //   });
    // }

    if (addMovieSearchRedux && addMovieSearchRedux !== "empty") {
      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      if (token) {
        axios
          .get(`${apiEndPoints.apiAdress}${apiEndPoints.movies}`, config)
          .then((res) => {
            // all title of movie in db
            const dBtitleList = res.data.map((item) =>
              item.title.toLowerCase()
            );

            // title of wanted media
            const titleToFind = mediaDataToAdd.title.toLowerCase();

            // find if data base contain this movie. If it is toggle
            if (dBtitleList.includes(titleToFind)) {
              setShowAddBtn(false);
            }
          });
      }
    }
  }, [addMovieSearchRedux]);

  return (
    <>
      {showAddBtn ? (
        <motion.div
          className="BtnAddMovieToLib__container"
          whileHover={{ y: "-4px" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => btnActions()}
        >
          <i className="ri-play-list-add-line"></i>
          <p>Ajouter</p>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};
