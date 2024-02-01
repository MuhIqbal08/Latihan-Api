import axios from 'axios';
import baseApi from './api';

const topComic = async () => {
  const options = {
    method: 'GET',
    url: `${baseApi}/top/manga?filter=bypopularity&page=1`,
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const response = await axios.request(options);
    const results = response.data.data;
    return results;
    // console.log(results);
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching top comics:', error);
  }
};

const searchComic = async (manga) => {
  const options = {
    method: 'GET',
    url: `${baseApi}/manga?q=${manga}&order_by=popularity&sort=asc&sfw`,
    header: {
      accept: 'application/json',
    },
  };

  try {
    const response = await axios.request(options);
    const results = response.data.data;
    return results;
    // console.log(results);
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching search comic', error);
  }
};

const comicDetail = async (malId) => {
  const options = {
    method: 'GET',
    url: `${baseApi}/manga/${malId}/full`,
    headers: {
      accept: 'application/json',
    },
  };

  try {
    const response = await axios.request(options);
    const results = response.data.data;
    return results;
    // console.log(results);
  } catch (error) {
    console.error(error);
    throw new Error('Error fetching detail comics:', error);
  }
};

export { topComic, comicDetail, searchComic };
