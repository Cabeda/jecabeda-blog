const axios = require('axios');

const upPageCount = (location) => {
  axios(`/api/count?page=${location}`).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.blob();
  });
};

// Logs when the client route changes
exports.onRouteUpdate = ({ location, prevLocation }) => {
  upPageCount(location.pathname);
};
