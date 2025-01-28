import axios from 'axios';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (country = 'us') => {
  try {
    const response = await axios.get(`${BASE_URL}/top-headlines`, {
      params: {
        country,
        apiKey: API_KEY,
      },
    });
    return response.data.articles; // Return articles array
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};
