import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {SearchButton} from "../UI-components/SearchButton/SearchButton"

import colorScss from "../../Style/_settings.scss";
import { setAddMovieSearch } from "../../ReduxToolKit/Reducers/addMovieSearch.slice";

export const SearchBarAddMovie = () => {
  const [searchContent, setSearchContent] = useState("");

  // redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAddMovieSearch(""));

    axios
      .get(
        `http://api.themoviedb.org/3/search/movie?api_key=489e6804c33c153a74c43a379d22bb39&query=${searchContent}&language=fr-FR&page=1&include_adult=fal`
      )
      .then((res) => {
        if (res) {
          dispatch(setAddMovieSearch(res.data.results));
          // to reset input search
          setSearchContent("");
        }
      });
  };

  return (
    <div className="SearchBarAddMovie__container">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Rechercher n'importe quel film à ajouter par son titre"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
        />
        <SearchButton
          textContent={"Rechercher"}
          bgColor={colorScss.mostImportantElementColor}
        />
      </form>
    </div>
  );
};
