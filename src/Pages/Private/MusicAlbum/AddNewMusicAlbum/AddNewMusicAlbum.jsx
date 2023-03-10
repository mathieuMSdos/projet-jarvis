import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardsAll } from "../../../../Components/CardsAll/CardsAll";
import { SearchBarAddMusicAlbum } from "../../../../Components/SearchBarAddMusicAlbum/SearchBarAddMusicAlbum";
import { setAddMovieSearch } from "../../../../ReduxToolKit/Reducers/addMovieSearch.slice";

export const AddNewMusicAlbum = () => {
  // REDUX TOOLKIT PART
  const dispatch = useDispatch();
  const searchReduxState = useSelector(
    (state) => state.addMovieSearch.addMovieSearch
  );

  useEffect(() => {
    dispatch(setAddMovieSearch("empty"));
  }, []);

  return (
    <div className="addNewMusicAlbum__container">
      <div className="addNewMusicAlbum__header">
        <h1>Ajouter un album à votre bibliothèque</h1>
      </div>
      <div className="addNewMusicAlbum__actions">
        <SearchBarAddMusicAlbum />
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
          addMovieBtn={true}
          addTvShowBtn={false}
          deleteMediaBtn={false}
          albumCoverUrl={true}
          mediaType={"album"}
        />
      </div>
    </div>
  );
};
