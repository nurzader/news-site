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
    return _transformNew(response);
  };

  const _transformNew = (news) => {
    return {
      id: news.id,
      author: news.author,
      country: news.country,
      link: news.link,
      topic: news.topic,
      title: news.title,
      summary: news.summary,
      published_date: news.published_date,
      img_url: news.img_url,
    };
  };

  return { getNew };
};

export default NewsService;
