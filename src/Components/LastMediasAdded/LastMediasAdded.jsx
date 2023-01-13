import axios from "axios";
import apiEndPoints from "../../Utils/utilsApi";
import React, { useEffect, useState } from "react";
import { CardLastMediasAdded } from "./CardLastMediasAdded/CardLastMediasAdded";

export const LastMediasAdded = ({title, data}) => {
  const [lastMediaDatas, setLastMediaDatas] = useState();

  useEffect(() => {
    // CODE WORKS WITH JSON SERVER BEFORE CONNECT TO THE BACKEND

    // axios.get("http://localhost:3000/lastMediaAdded").then((res) => {
    //   setLastMediaDatas(res.data);
    // });

    // CODE WORKS AFTER CONNECTED FRONT AND BACK

    const token = localStorage.getItem("token");
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (token) {
      axios
        .get(`${apiEndPoints.apiAdress}${apiEndPoints.home}`, config)
        .then((res) => {
          setLastMediaDatas(res.data.latestMovie);
        });
    }
  }, []);

  return (
    <div className="lastMediaAdded__container">
      <div className="lastMediaAdded__header">
        <h2>{title}</h2>
      </div>
      <div className="lastMediaAdded__card-container">
        {lastMediaDatas ? (
          <>
            {lastMediaDatas.map((item, index) => (
              <CardLastMediasAdded
                count={index}
                key={index}
                mediaDatas={item}
                endPoint={"movies"}
              />
            ))}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
