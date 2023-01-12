import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SingleCard } from "../../Components/CardsAll/SingleCard/SingleCard";
import { setSearchPrivateHome } from "../../ReduxToolKit/Reducers/searchPrivateHome.slice";

export const CardsAll = ({
  title,
  emptySearchMessage,
  globalState,
  showMedia,
  addMediaBtn,
  addMovieBtn,
  addTvShowBtn,
  deleteMediaBtn,
}) => {
  const searchReduxState = useSelector(
    (state) => state[globalState][globalState]
  );

  const dispatch = useDispatch();

  return (
    <div className="cardsAll__container">
      <div className="cardsAll__title-container">
        {searchReduxState && searchReduxState === "empty" ? (
          <div className="empty__container">
            <div className="noResult__container">
              <h3>{emptySearchMessage}</h3>
            </div>
            <i className="ri-search-line"></i>
          </div>
        ) : (
          <>
            {searchReduxState && searchReduxState.length > 0 ? (
              <h2>{title}</h2>
            ) : (
              ""
            )}
          </>
        )}

        <div className="cardsAlls__results-container">
          {searchReduxState === "empty" ? (
            ""
          ) : (
            <>
              {searchReduxState && searchReduxState.length > 0 ? (
                <>
                  {searchReduxState.map((mediaDatas, index) => (
                    <SingleCard
                      count={index}
                      key={index}
                      mediaDatas={mediaDatas}
                      endPoint={"movies"}
                      showMedia={showMedia}
                      addMediaBtn={addMediaBtn}
                      deleteMediaBtn={deleteMediaBtn}
                      addMovieBtn={addMovieBtn}
                      addTvShowBtn={addTvShowBtn}
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
          )}
        </div>
      </div>
    </div>
  );
};
