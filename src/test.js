import React from "react";
import { useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import "./test.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSoundcloud } from "@fortawesome/free-brands-svg-icons";

function Test() {

    const getInitialState = () => {
        const value = "1";
        return value;
      };
    
  const [container, setcontainer] = useState([]);
  const [value, setValue] = useState(getInitialState);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "33c034b378msh75cd74fc342dd78p1af2b9jsnf5805ea03d8f",
        "X-RapidAPI-Host": "odds.p.rapidapi.com",
      },
    };

    fetch(
      `https://odds.p.rapidapi.com/v4/sports/americanfootball_nfl/scores?daysFrom=${value}`,
      options
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setcontainer(data);
      })
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, [value]);

 
 

  const handleChange = (e) => {
    setValue(e.target.value);
  };


  return (
    <div>
      <form id="day" action="/action_page.php">
        <label id="label" for="days">Choose Days:</label>
        <select name="days" id="days" value={value} onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
      <div className="App">
        {container.map((item) => {
          return (
            <div id="test">
              <div class="header">
                <h2 class="hii">American Football NFL</h2>
                <FontAwesomeIcon icon={faSoundcloud} id="icon" />
              </div>

              <div class="row">
                <div class="column" id="a">
                  {item.home_team}
                </div>
                <div class="column" id="b">
                  <p id="q">
                    {item.completed ? Math.floor(Math.random() * 20 + 10) : 0}
                  </p>
                  <p id="q">
                    {item.completed ? Math.floor(Math.random() * 20 + 10) : 0}
                  </p>
                </div>
                <div class="column" id="c">
                  {item.away_team}
                </div>
              </div>

              <div class="footer">
                <p id="foot">
                  Commence Date : {item.commence_time.slice(0, 10)}
                </p>
                <p id="foot">
                  Commence Time: {item.commence_time.slice(11, 19)}
                </p>
                <p id="done">
                  {item.completed ? "Completed" : "Yet to be Started"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Test;
