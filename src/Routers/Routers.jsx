import React from "react";
import { Route, Routes } from "react-router-dom";
import { Private } from "../Pages/Private/Private";
import { PrivateHome } from "../Pages/Private/PrivateHome/PrivateHome";
import { Error404 } from "../Pages/Error404/Error404";
import { WelcomePage } from "../Pages/WelcomePage/WelcomePage";
import { SignUp } from "../Pages/SignUp/SignUp";
import { Movies } from "../Pages/Private/Movies/Movies";
import { TvShows } from "../Pages/Private/TvShows/TvShows";
import { AvailableSoon } from "../Pages/Private/AvailableSoon/AvailableSoon";
import { Favorites } from "../Pages/Private/Favorites/Favorites";
import { ShowMedia } from "../Pages/Private/ShowMedia/ShowMedia";
import { AddNewMovie } from "../Pages/Private/Movies/AddNewMovie/AddNewMovie";
import { Contacts } from "../Pages/Contacts/Contacts";
import { LegalNotices } from "../Pages/LegalNotices/LegalNotices";
import { AnimatePresence } from "framer-motion";
import { AddNewTvShow } from "../Pages/Private/TvShows/AddNewTvShow/AddNewTvShow";

export const Routers = () => {
  return (
    <>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/legal-notices" element={<LegalNotices />} />
          <Route path="/private" element={<Private />}>
            <Route path="/private/private-home" element={<PrivateHome />} />
            <Route path="/private/private-movies" element={<Movies />} />
            <Route path="/private/private-tvshows" element={<TvShows />} />
            <Route path="/private/private-music" element={<AvailableSoon />} />
            <Route
              path="/private/private-videogames"
              element={<AvailableSoon />}
            />
            <Route path="/private/private-books" element={<AvailableSoon />} />
            <Route
              path="/private/private-favorites"
              element={<AvailableSoon />}
            />
            <Route
              path="/private/private-show-media/:endPoint/:id"
              element={<ShowMedia />}
            />
            <Route
              path="/private/private-add-movie"
              element={<AddNewMovie />}
            />
            <Route
              path="/private/private-add-tvshow"
              element={<AddNewTvShow />}
            />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};
