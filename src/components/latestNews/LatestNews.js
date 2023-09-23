import React, { useEffect, useState } from 'react';
import './latestNews.scss';
import NewsService from '../../services/NewsService';
import Skeleton from '../skeleton/Skeleton';

const LatestNews = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onRequest();
  }, []);

  const { getNews } = NewsService();

  const onNewsLoaded = (news) => {
    setNewsList(news);
    setLoading(false);
  };

  const onNewsLoading = (news) => {
    setLoading(true);
  };

  const onRequest = () => {
    onNewsLoading();
    getNews().then(onNewsLoaded);
  };

  return (
    <div className="latest-news">
      <h1>Последние новости</h1>
      <ul className="latest-news__list">
        {loading ? (
          [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        ) : (
          <>
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
          </>
        )}
      </ul>
    </div>
  );
};

export default LatestNews;
