import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsAll } from "../../../../Components/CardsAll/CardsAll";
import { SearchBarAddMovie } from "../../../../Components/SearchBarAddMovie/SearchBarAddMovie";
import { setAddMovieSearch } from "../../../../ReduxToolKit/Reducers/addMovieSearch.slice";

export const AddNewMovie = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAddMovieSearch("empty"));
  }, []);

  return (
    <div className="AddNewMovie__container">
      <div className="AddNewMovie__header">
        <h1>Ajouter un média à votre bibliothèque de films</h1>
      </div>
      <div className="AddNewMovie__actions">
        <SearchBarAddMovie />
      </div>
      <div className="AddNewMovie__show-container">
        <CardsAll
          title={"Résultats : "}
          emptySearchMessage={
            "Faites une recherche pour trouver un film à ajouter"
          }
          globalState={"addMovieSearch"}
          showMedia={false}
          addMediaBtn={true}
          addMovieBtn={true}
          addTvShowBtn={false}
          deleteMediaBtn={false}
        />
      </div>
    </div>
  );
};
