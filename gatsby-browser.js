import axios from "axios";

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// custom CSS styles
import "./src/normalize.css"
import "./src/style.css"

const upPageCount = (location) => {
  axios(`/api/count?page=${location}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.blob();
    })
    .catch((error) => {
      console.log("Count Error: ", error);
    });
};

// Logs when the client route changes
export function onRouteUpdate({ location, prevLocation }) {
  upPageCount(location.pathname);
}
