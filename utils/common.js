import axios from "axios";
export const request = async (url) => {
  const options = {
    method: "GET",
    url: `https://online-movie-database.p.rapidapi.com/${url}`,
    headers: {
      "X-RapidAPI-Key": "a152d1d5f3msh0f74cc04550bdf4p1e18acjsn49fb5192ef39",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const { data } = await axios.request(options);

  return data;
};
