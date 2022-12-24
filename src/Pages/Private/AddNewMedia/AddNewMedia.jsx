import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsAll } from "../../../Components/CardsAll/CardsAll";
import { SearchBarAddMedia } from "../../../Components/SearchBarAddMedia/SearchBarAddMedia";
import { setAddMovieSearch } from "../../../ReduxToolKit/Reducers/addMovieSearch.slice";

export const AddNewMedia = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setAddMovieSearch("empty"));
  }, []);

  return (
    <div className="AddNewMedia__container">
      <div className="AddNewMedia__header">
        <h1>Ajouter un média à votre bibliothèque de films</h1>
      </div>
      <div className="AddNewMedia__actions">
        <SearchBarAddMedia />
      </div>
      <div className="AddNewMedia__show-container">
        <CardsAll
          title={"Résultats : "}
          emptySearchMessage={
            "Faites une recherche pour trouver un film à ajouter"
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
