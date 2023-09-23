import React, { useEffect, useState } from 'react';
import './latestNews.scss';
import NewsService from '../../services/NewsService';

const LatestNews = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    onRequest();
  }, []);

  const { getNews } = NewsService();

  const onNewsLoaded = (news) => {
    setNewsList(news);
  };

  const onRequest = () => {
    getNews().then(onNewsLoaded);
  };

  return (
    <div className="latest-news">
      <h1>Последние новости</h1>
      <ul className="latest-news__list">
        {newsList.map((news) => (
          <li key={news.id} className="latest-news__item">
            <img className="latest-news__banner" src={news.img_url} alt="banner" />
            <p className="latest-news__title">{news.title}</p>
            <div className="latest-news__row">
              <span>{news.published_date} </span>
              <span>{news.country}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LatestNews;
