import apiEndPoints from "../../../Utils/utilsApi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCard } from "../../../Components/CardsAll/SingleCard/SingleCard";
import { SearchBar } from "../../../Components/SearchBar/SearchBar";
import { BtnAddMedia } from "../../../Components/UI-components/BtnAddMedia/BtnAddMedia";
import { setSearchPrivateHome } from "../../../ReduxToolKit/Reducers/searchPrivateHome.slice";
import { motion } from "framer-motion";

export const MusicAlbum = () => {
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

  const [yourmusicAlbumList, setyourmusicAlbumList] = useState();
  const [searchMovie, setSearchMovie] = useState();

  // to show movies in user data base
  // to hide movie card in movie list showed to the user just after he delete this movie we add listener deleteMediaToggleRedux
  useEffect(() => {
    // to get all dataBase for this media and show it to the user

    dispatch(setSearchPrivateHome(""));
    // ORIGINAL
    // axios.get("http://localhost:3000/movies").then((res) => {
    //   setyourmusicAlbumList(res.data);
    // });

    // BACK CONNECTED

    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (token) {
      axios
        .get(`${apiEndPoints.apiAdress}${apiEndPoints.musicAlbum}`, config)
        .then((res) => {
          setyourmusicAlbumList(res.data);
        });
    }
  }, [deleteMediaToggleRedux, cancelSearchRedux]);

  useEffect(() => {
    setSearchMovie(searchPrivateHome);
    setyourmusicAlbumList("");
  }, [searchPrivateHome]);

  return (
    <div className="yourmusicAlbum__container">
      <motion.div
        className="yourmusicAlbum__header"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <h1>Votre collection d'album</h1>
      </motion.div>
      <motion.div
        className="yourmusicAlbum__actions"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <SearchBar endPoint={"musicAlbum"} />
        <BtnAddMedia
          btnLabel={"Ajouter un album"}
          btnUrl={"/private/private-add-music-album"}
        />
      </motion.div>
      <div className="yourmusicAlbum__show-container">
        {searchMovie ? (
          <>
            {searchMovie !== "noResult" ? (
              <>
                {searchMovie.map((mediaDatas, index) => (
                  <SingleCard
                    count={index}
                    key={index}
                    mediaDatas={mediaDatas}
                    endPoint={"musicAlbum"}
                    deleteEndPoint={"delete_tvshow"}
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
            {yourmusicAlbumList ? (
              <>
                {yourmusicAlbumList.map((mediaDatas, index) => (
                  <SingleCard
                    count={index}
                    key={index}
                    mediaDatas={mediaDatas}
                    endPoint={"musicAlbum"}
                    deleteEndPoint={"delete_tvshow"}
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
