import axios from "axios";

const upPageCount = (location) => {
  axios(`/api/count?page=${location}`).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    console.log("Run api");
    return response.blob();
  });
};

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  console.log("new pathname", location.pathname);
  console.log("old pathname", prevLocation ? prevLocation.pathname : null);

  upPageCount(location.pathname);
};
