// https://api.themoviedb.org/3/movie/550?api_key=40b82095796d66b2654433539771f575
// https://api.themoviedb.org/3/authentication
//API Key: 40b82095796d66b2654433539771f575

export const baseUrl = "http://localhost:3000";

export const handleServerResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
};

export const request = (url, options) => {
  return fetch(url, options).then(handleServerResponse);
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer 40b82095796d66b2654433539771f575",
  },
};

export const authenticate = () => {
  return fetch(
    "https://api.themoviedb.org/3/movie/550?api_key=40b82095796d66b2654433539771f575",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));
};

export const getMovieList = () => {
  return request(`${baseUrl}/movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const addMovie = (movie) => {
  return request(`${baseUrl}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: movie.title,
      card: movie.card,
    }),
  });
};

export const removeMovie = (id) => {
  return request(`${baseUrl}/movies/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
