import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { CommonBtn } from "../UI-components/CommonBtn/CommonBtn";
import colorScss from "../../Style/_settings.scss";
import { setAddMovieSearch } from "../../ReduxToolKit/Reducers/addMovieSearch.slice";

export const SearchBarAddMusicAlbum = () => {
  const [searchContent, setSearchContent] = useState("");

  // redux
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setAddMovieSearch(""));

    axios
      .get(
        `https://api.discogs.com/database/search?artist=${searchContent}&country=Europe&format=album&key=tKajdODMGdFxhTozHeNe&secret=sTiuYlQjWlGxIFqVqvvyIFPlmixxOSTn`
      )
      .then((res) => {
        if (res) {
          const result = res.data.results;
          const sortedResult = result
            // to sort by date of realease, most recent album in top
            .sort((a, b) => (a.year < b.year ? 1 : -1))
            // to delete album without release date
            .filter((album) => {
              if ("year" in album && "cover_image" in album) {
                return album;
              }
            });
          // console.log(sortedResult);
          // to filter duplicates album by title
          const noDuplicatesAlbumArray = Array.from(
            new Set(sortedResult.map((a) => a.title))
          ).map((title) => {
            return sortedResult.find((a) => a.title === title);
          });

          // console.log(noDuplicatesAlbumArray);

          dispatch(setAddMovieSearch(noDuplicatesAlbumArray));
          // to reset input search
          setSearchContent("");

          // dispatch(setAddMovieSearch(res.data.results));
          // // to reset input search
          // setSearchContent("");
        }
      });
  };

  return (
    <div className="searchBarAddMusicAlbum__container">
      <form onSubmit={handleSubmit}>
        <input
          className="searchInput"
          type="text"
          placeholder="Recherchez n'importe quelle série à ajouter par son titre"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
        />
        <CommonBtn
          textContent={"Recherchez"}
          bgColor={colorScss.mostImportantElementColor}
        />
      </form>
    </div>
  );
};
