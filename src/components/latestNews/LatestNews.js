import React, { useEffect, useState } from 'react';
import './latestNews.scss';
import NewsService from '../../services/NewsService';
import Skeleton from '../skeleton/Skeleton';
import { Link } from 'react-router-dom';

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
      <h1>Latest news</h1>
      <ul className="latest-news__list">
        {loading ? (
          [...new Array(8)].map((_, index) => <Skeleton key={index} />)
        ) : (
          <>
            {newsList.map((news) => (
              <li key={news.id} className="latest-news__item">
                <Link to={`/news/${news.id}`}>
                  <img className="latest-news__banner" src={news.img_url} alt="banner" />
                  <span className="latest-news__title">{news.title}</span>
                </Link>
              </li>
            ))}
          </>
        )}
      </ul>
      <button className="latest-news__button">More news</button>
    </div>
  );
};

export default LatestNews;
