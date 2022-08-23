export const BASE_API = "https://saurav.tech/NewsAPI/";

export const getNewsAPI = (category, country = "us") => {
  return `${BASE_API}/top-headlines/category/${category}/${country}.json`;
};

export const getSourceAPI = (source) => {
  return `${BASE_URL}/everything/${source}.json`;
};
