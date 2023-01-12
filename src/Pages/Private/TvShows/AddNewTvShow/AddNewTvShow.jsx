import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsAll } from "../../../../Components/CardsAll/CardsAll";
import { SearchBarAddMovie } from "../../../../Components/SearchBarAddMovie/SearchBarAddMovie";
import { SearchBarAddTvShow } from "../../../../Components/SearchBarAddTvShow/SearchBarAddTvShow";
import { setAddMovieSearch } from "../../../../ReduxToolKit/Reducers/addMovieSearch.slice";

export const AddNewTvShow = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAddMovieSearch("empty"));
  }, []);

  return (
    <div className="AddNewTvShow__container">
      <div className="AddNewTvShow__header">
        <h1>Ajouter une série à votre bibliothèque</h1>
      </div>
      <div className="AddNewTvShow__actions">
        <SearchBarAddTvShow />
      </div>
      <div className="AddNewTvShow__show-container">
        <CardsAll
          title={"Résultats : "}
          emptySearchMessage={
            "Faites une recherche pour trouver une série à ajouter"
          }
          globalState={"addMovieSearch"}
          showMedia={false}
          addMediaBtn={true}
          deleteMediaBtn={false}
        />
      </div>
    </div>
  );
};
