import React, { useEffect, useState } from "react";
import { Footer } from "../Components/Footer/Footer";
import { Routers } from "../Routers/Routers";
import { Header } from "../Components/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { LogoJarvis } from "../Components/UI-components/LogoJarvis/LogoJarvis";
import { PopUpEvent } from "../Components/UI-components/PopUpEvent/PopUpEvent";
import { setUserLog } from "../ReduxToolKit/Reducers/userLog.slice";

export const Layout = () => {
  // Redux TK part
  const dispatch = useDispatch();
  // Call it to show or not the logo
  const userLog = useSelector((state) => state.userLog.userLog);

  return (
    <div className="layout__container">
      {userLog ? <Header /> : ""}
      <div className="content__page-container">
        {/* <PopUpEvent /> */}
        <Routers />
      </div>
      <div className="footer_container">
        <Footer />
      </div>
    </div>
  );
};
