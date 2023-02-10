import apiEndPoints from "../../Utils/utilsApi";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchPrivateHome } from "../../ReduxToolKit/Reducers/searchPrivateHome.slice";
import { CommonBtn } from "../UI-components/CommonBtn/CommonBtn";
import colorScss from "../../Style/_settings.scss";
import { motion } from "framer-motion";
import { setCancelSearch } from "../../ReduxToolKit/Reducers/cancelSearch.slice";

export const SearchBar = ({ endPoint }) => {
  // redux
  const dispatch = useDispatch();
  const cancelSearchRedux = useSelector(
    (state) => state.cancelSearch.cancelSearch
  );

  //React Part
  const [searchContent, setSearchContent] = useState("");
  const [showCancelSearchBtn, setShowCancelSearchBtn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchContent) {
      // Start by reset search
      dispatch(setSearchPrivateHome(""));

      const token = localStorage.getItem("token");
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };

      if (token) {
        axios
          .get(`${apiEndPoints.apiAdress}${apiEndPoints[endPoint]}`, config)
          .then((res) => {
            if (res) {
              let result;
              result = res.data.filter((item) =>
                item.title.toLowerCase().includes(searchContent)
              );
              if (result.length !== 0) {
                dispatch(setSearchPrivateHome(result));

                setShowCancelSearchBtn(true);
              } else {
                // clear input
                setSearchContent("");
                dispatch(setSearchPrivateHome("noResult"));

                // dispatch(setSearchPrivateHome("noResult"));

                console.log("votre recherche n'a pas de résultats");
              }
            } else {
              console.log("erreur");
            }
          });
      }
    }
  };

  // actions for cancel search btn

  const handleCancelBtn = () => {
    // reset search in Redux store
    dispatch(setSearchPrivateHome(""));
    // toggle state cancel search in Redux Store
    dispatch(setCancelSearch(!cancelSearchRedux));
    // clear input
    setSearchContent("");
    // to hide show cancel search button
    setShowCancelSearchBtn(false);
  };

  return (
    <div className="search__bar-container">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Rechercher un titre dans votre médiathèque..."
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
        />
        {showCancelSearchBtn ? (
          <motion.div
            className="searchBar__cancelButton"
            whileHover={{ y: "-4px" }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              handleCancelBtn();
            }}
          >
            <i className="ri-close-circle-line"></i>
            <p>Annuler</p>
          </motion.div>
        ) : (
          ""
        )}

        <CommonBtn
          textContent={"Rechercher"}
          bgColor={colorScss.mostImportantElementColor}
        />
      </form>
    </div>
  );
};
