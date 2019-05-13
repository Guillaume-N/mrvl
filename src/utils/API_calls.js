const API_URL = "https://gateway.marvel.com:443/v1/public";
const API_CHARACTERS_URL = `${API_URL}/characters`;
const API_PUBLIC_KEY = "efb66278d4bcec36f0534964c3073436";

const getCharacters = (orderBy = "name", limit = 100, offset = 0) => {
  const params = `?orderBy=${orderBy}&limit=${limit}&offset=${offset}`;
  const apiUrlWithParams = `${API_CHARACTERS_URL}${params}&apikey=${API_PUBLIC_KEY}`;
  return fetch(apiUrlWithParams)
    .then(res => res.json())
    .then(res => res.data.results);
};

const getCharacterDetails = (id = 1010885) => {
  const apiUrlWithId = `${API_CHARACTERS_URL}/${id}?apikey=${API_PUBLIC_KEY}`;
  return fetch(apiUrlWithId)
    .then(res => res.json())
    .then(res => res.data.results[0]);
};

export { getCharacters, getCharacterDetails };