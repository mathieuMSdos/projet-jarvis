import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsAll } from "../../../../Components/CardsAll/CardsAll";
import { SearchBarAddMovie } from "../../../../Components/SearchBarAddMovie/SearchBarAddMovie";
import { SearchBarAddTvShow } from "../../../../Components/SearchBarAddTvShow/SearchBarAddTvShow";
import { setAddMovieSearch } from "../../../../ReduxToolKit/Reducers/addMovieSearch.slice";

export const AddNewMusicAlbum = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAddMovieSearch("empty"));
  }, []);

  return (
    <div className="addNewMusicAlbum__container">
      <div className="addNewMusicAlbum__header">
        <h1>Ajouter un album à votre bibliothèque</h1>
      </div>
      <div className="addNewMusicAlbum__actions">
        <SearchBarAddTvShow />
      </div>
      <div className="addNewMusicAlbum__show-container">
        <CardsAll
          title={"Résultats : "}
          emptySearchMessage={
            "Faites une recherche pour trouver un album à ajouter"
          }
          globalState={"addMovieSearch"}
          showMedia={false}
          addMediaBtn={true}
          addMovieBtn={false}
          addTvShowBtn={true}
          deleteMediaBtn={false}
        />
      </div>
    </div>
  );
};
