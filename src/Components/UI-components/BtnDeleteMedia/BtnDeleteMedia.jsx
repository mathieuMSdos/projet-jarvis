import axios from "axios";
import apiEndPoints from "../../../Utils/utilsApi";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteMediaToggle } from "../../../ReduxToolKit/Reducers/deleteMediaToggle.slice";
import { PopUpEvent } from "../PopUpEvent/PopUpEvent";

export const BtnDeleteMedia = ({ mediaDatas }) => {
  // Redux part
  const dispatch = useDispatch();
  const addMovieSearchRedux = useSelector(
    (state) => state.addMovieSearch.addMovieSearch
  );
  const deleteMediaToggleRedux = useSelector(
    (state) => state.deleteMediaToggle.deleteMediaToggle
  );

  const mediaDataToDelete = {
    title: mediaDatas.title,
    poster_path: mediaDatas.poster_path,
    overview: mediaDatas.overview,
  };

  //React  part

  const [showDeleteBtn, setShowDeleteBtn] = useState(true);

  const btnActions = () => {
    // CODE BEFORE CONNECT TO BACKEND
    // // chekck if dataBase already contains the media that user try to delete and get his index inside his dataBase

    // // get dataBase medias

    // axios.get("http://localhost:3000/movies").then((res) => {
    //   // all movie in db
    //   const allDbMovie = res.data;

    //   // all title of movie in db
    //   const dBtitleList = res.data.map((item) => item.title.toLowerCase());

    //   // title of the media you want to delete

    //   const titleToFind = mediaDatas.title.toLowerCase();

    //   //   check if movie is in already in data base before to delete it

    //   if (dBtitleList.includes(titleToFind)) {
    //     // to find index of the movie you want to delete by its title INSIDE the user data base

    //     const dataOfMovieYouWantToDeleted = allDbMovie.find(
    //       (item) => item.title.toLowerCase() === titleToFind
    //     );

    //     const IdOfMovieYouWantToDeleted = dataOfMovieYouWantToDeleted.id;

    //     // axios request to delete the movie by his id if movie is inside user data Base
    //     axios.delete(
    //       `http://localhost:3000/movies/${IdOfMovieYouWantToDeleted}`
    //     );

    //     // hide delete button
    //     setShowDeleteBtn(false);

    //     // toggle redux
    //     dispatch(setDeleteMediaToggle(!deleteMediaToggleRedux));

    //     console.log(
    //       "LE FILM a été supprimé. Mettre une notification de supression en mode add to basket qqe par en haut de la page "
    //     );
    //   } else {
    //     console.log(
    //       "le film n'est pas dans la base de donné, donc on ne peux pas le supprimer"
    //     );
    //   }
    // });

    // CODE AFTER CONNECT TO BACKEND
    // chekck if dataBase already contains the media that user try to delete and get his index inside his dataBase

    // get dataBase medias
    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (token) {
      axios
        .get(`${apiEndPoints.apiAdress}${apiEndPoints.movies}`, config)
        .then((res) => {
          // all movie in db
          const allDbMovie = res.data;

          // all title of movie in db
          const dBtitleList = res.data.map((item) => item.title.toLowerCase());

          // title of the media you want to delete

          const titleToFind = mediaDatas.title.toLowerCase();

          //   check if movie is in already in data base before to delete it

          if (dBtitleList.includes(titleToFind)) {
            // to find index of the movie you want to delete by its title INSIDE the user data base

            const dataOfMovieYouWantToDeleted = allDbMovie.find(
              (item) => item.title.toLowerCase() === titleToFind
            );

            const IdOfMovieYouWantToDeleted = dataOfMovieYouWantToDeleted.id;

            // axios request to delete the movie by his id if movie is inside user data Base
            axios
              .delete(
                `${apiEndPoints.apiAdress}${apiEndPoints.delete_movie}/${IdOfMovieYouWantToDeleted}`,
                config
              )
              .then(() => {
                // hide delete button

                // toggle redux

                setShowDeleteBtn(false);

                console.log(
                  "LE FILM a été supprimé. Mettre une notification de supression en mode add to basket qqe par en haut de la page "
                );
              })
              .then(() =>
                dispatch(setDeleteMediaToggle(!deleteMediaToggleRedux))
              );
          } else {
            console.log(
              "le film n'est pas dans la base de donné, donc on ne peux pas le supprimer"
            );
          }
        });
    }
  };

  return (
    <>
      <div className="BtnDeleteMedia__container" onClick={() => btnActions()}>
        <p>Supprimer</p>
        <i className="ri-delete-bin-line"></i>
      </div>
    </>
  );
};
