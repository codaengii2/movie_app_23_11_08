const fetch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
// const setUrl = (type) => {
//   return baseUrl + `movie/${type}` + "?language=ko-KR";
// };
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=ko-KR";
const popularUrl = baseUrl + "movie/popular" + "?language=ko-KR";
const topRatedUrl = baseUrl + "movie/top_rated" + "?language=ko-KR";
const upcomingUrl = baseUrl + "movie/upcoming" + "?language=ko-KR";
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGQxOGFkNWQ4YjYzYjNmYjY0NjY2NWNmODc4ZGQ0OSIsInN1YiI6IjY1NGIzYjM2Mjg2NmZhMDBmZTAxNzNkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.D3qxPqwPR55bduPDEpwBBz27tng-T9UsVkFnrF6v6Ag",
  },
};

export const nowPlaying = () => {
  // return fetch(setUrl("now_playing"), options).then((res) => res.json());
  return fetch(nowPlayingUrl, options).then((res) => res.json());
};

export const popular = () => {
  // return fetch(setUrl("popular"), options).then((res) => res.json());
  return fetch(popularUrl, options).then((res) => res.json());
};

export const topRated = () => {
  // return fetch(setUrl("top_rated"), options).then((res) => res.json());
  return fetch(topRatedUrl, options).then((res) => res.json());
};

export const upcoming = () => {
  // return fetch(setUrl("upcoming"), options).then((res) => res.json());
  return fetch(upcomingUrl, options).then((res) => res.json());
};

export const movieDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}` + "?language=ko-KR";
  return fetch(detailUrl, options).then((res) => res.json());
};
//{}가 있으면 return 생략 못함
