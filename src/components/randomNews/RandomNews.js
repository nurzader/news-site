import React, { useEffect, useState } from 'react';
import './randomNews.scss';
import NewsService from '../../services/NewsService';

const RandomNews = () => {
  const [news, setNews] = useState({});

  useEffect(() => {
    updateNews();
    const timerId = setInterval(updateNews, 70000)

    return () => {
      clearInterval(timerId)
    }
  }, []);

  const { getNew } = NewsService();

  const onNewsLoaded = (news) => {
    setNews(news);
  };

  const updateNews = () => {
    const id = Math.floor(Math.random() * (47 - 1) + 1);
    getNew(id).then(onNewsLoaded);
  };

  console.log(news);
  const { img_url, title, country, published_date, summary } = news;

  return (
    <article className="random-news">
      <div className="random-news__banner">
        <img className="random-news__img" src={img_url} alt="banner" />
        <p className="random-news__title">{title}</p>
        <div className="random-news__row">
          <span className="random-news__hour">{published_date}</span>
          <span className="random-news__country">{country}</span>
        </div>
      </div>
      <div className="random-news__description">{summary}</div>
    </article>
  );
};

export default RandomNews;
