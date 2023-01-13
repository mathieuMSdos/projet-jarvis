import apiEndPoints from "../../../Utils/utilsApi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCard } from "../../../Components/CardsAll/SingleCard/SingleCard";
import { SearchBar } from "../../../Components/SearchBar/SearchBar";
import { BtnAddMedia } from "../../../Components/UI-components/BtnAddMedia/BtnAddMedia";
import { setSearchPrivateHome } from "../../../ReduxToolKit/Reducers/searchPrivateHome.slice";
import { motion } from "framer-motion";

export const TvShows = () => {
  // Redux part
  const dispatch = useDispatch();
  const userLog = useSelector((state) => state.userLog.userLog);
  const cancelSearchRedux = useSelector(
    (state) => state.cancelSearch.cancelSearch
  );

  const searchPrivateHome = useSelector(
    (state) => state.searchPrivateHome.searchPrivateHome
  );
  const deleteMediaToggleRedux = useSelector(
    (state) => state.deleteMediaToggle.deleteMediaToggle
  );

  //React part

  const [yourTvShowsList, setyourTvShowsList] = useState();
  const [searchMovie, setSearchMovie] = useState();

  // to show movies in user data base
  // to hide movie card in movie list showed to the user just after he delete this movie we add listener deleteMediaToggleRedux
  useEffect(() => {
    // to get all dataBase for this media and show it to the user

    dispatch(setSearchPrivateHome(""));
    // ORIGINAL
    // axios.get("http://localhost:3000/movies").then((res) => {
    //   setyourTvShowsList(res.data);
    // });

    // BACK CONNECTED

    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (token) {
      axios
        .get(`${apiEndPoints.apiAdress}${apiEndPoints.tvshows}`, config)
        .then((res) => {
          setyourTvShowsList(res.data);
        });
    }
  }, [deleteMediaToggleRedux, cancelSearchRedux]);

  useEffect(() => {
    setSearchMovie(searchPrivateHome);
    setyourTvShowsList("");
  }, [searchPrivateHome]);

  return (
    <div className="yourTvShows__container">
      <motion.div
        className="yourTvShows__header"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h1>Votre collection de séries</h1>
      </motion.div>
      <motion.div
        className="yourTvShows__actions"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SearchBar />
        <BtnAddMedia
          btnLabel={"Ajouter une série"}
          btnUrl={"/private/private-add-tvshow"}
        />
      </motion.div>
      <div className="yourTvShows__show-container">
        {searchMovie ? (
          <>
            {searchMovie !== "noResult" ? (
              <>
                {searchMovie.map((mediaDatas, index) => (
                  <SingleCard
                    count={index}
                    key={index}
                    mediaDatas={mediaDatas}
                    endPoint={"tvshows"}
                    showMedia={true}
                    addMediaBtn={false}
                    deleteMediaBtn={true}
                  ></SingleCard>
                ))}
              </>
            ) : (
              <div className="empty__container">
                <div className="noResult__container">
                  <h3>Désolé, nous n'avons trouvé aucun résultat !</h3>
                </div>
                <i className="ri-forbid-line"></i>
              </div>
            )}
          </>
        ) : (
          <>
            {yourTvShowsList ? (
              <>
                {yourTvShowsList.map((mediaDatas, index) => (
                  <SingleCard
                    count={index}
                    key={index}
                    mediaDatas={mediaDatas}
                    endPoint={"tvshows"}
                    showMedia={true}
                    addMediaBtn={false}
                    deleteMediaBtn={true}
                  ></SingleCard>
                ))}
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
};
