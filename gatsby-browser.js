import axios from "axios";

// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// custom CSS styles
import "./src/normalize.css"
import "./src/style.css"
import "prism-themes/themes/prism-vsc-dark-plus.css"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "prismjs/plugins/command-line/prism-command-line.css"

function upPageCount(location) {
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
}

// Logs when the client route changes
export function onRouteUpdate({ location, prevLocation }) {
  upPageCount(location.pathname);
}
