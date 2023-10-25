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
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MGI4MjA5NTc5NmQ2NmIyNjU0NDMzNTM5NzcxZjU3NSIsInN1YiI6IjY1Mzg1YTE1MGZiMTdmMDBhYmMwZGJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZUteWxr5wlR37wgL0g6EuvrQEggfxBEwiHUr3Oxd8ew",
  },
};

export const authenticate = () => {
  return fetch("https://api.themoviedb.org/3/authentication", options)
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
