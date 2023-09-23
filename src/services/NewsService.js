const NewsService = () => {
  const _URL = 'https://647217506a9370d5a41b05e5.mockapi.io/items';

  const getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Что-то пошло не так');
    }

    return await response.json();
  };

  const getNew = async (id) => {
    const response = await getResource(`${_URL}/${id}`);
    return response;
  };

  const getNews = async () => {
    const response = await getResource(`${_URL}?page=1&limit=8`);
    return response;
  };

  return { getNew, getNews };
};

export default NewsService;
