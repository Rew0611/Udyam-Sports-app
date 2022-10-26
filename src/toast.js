import React from "react";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./toast.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpotify } from "@fortawesome/free-brands-svg-icons";

function Toast() {
  const [container, setcontainer] = useState([]);
  const [value, setValue] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "33c034b378msh75cd74fc342dd78p1af2b9jsnf5805ea03d8f",
        "X-RapidAPI-Host": "odds.p.rapidapi.com",
      },
    };

    fetch("https://odds.p.rapidapi.com/v4/sports?all=true", options)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setcontainer(data);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, [value]);

  return (
    <div>
      <div className="App">
        {container.map((item) => {
          return (
            <div id="test">
              <div class="header">
                <h2 class="hii">{item.group}</h2>
                <FontAwesomeIcon icon={faSpotify } id="icon" />
              </div>

              <div class="row">
                <div class="column" id="a">
                  {item.title}
                </div>
                <div class="column" id="c">
                  {item.description}
                </div>
              </div>

              <div class="footer">
                <p id="done">
                  {item.active ? "Active" : "Not Active"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Toast;
