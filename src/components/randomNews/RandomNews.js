import React, { useEffect, useState } from 'react';
import './randomNews.scss';
import NewsService from '../../services/NewsService';
import Spinner from '../spinner/Spinner';

const RandomNews = () => {
  const [news, setNews] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    updateNews();

    const timerId = setInterval(updateNews, 70000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const { getNew } = NewsService();

  const onNewsLoaded = (news) => {
    setLoading(false);
    setNews(news);
  };

  const onNewsLoading = () => {
    setLoading(true);
  };

  const updateNews = () => {
    const id = Math.floor(Math.random() * (47 - 1) + 1);

    onNewsLoading();
    getNew(id).then(onNewsLoaded);
  };

  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || !news) ? <View news={news} /> : null;

  return (
    <article className="random-news">
      {spinner}
      {content}
    </article>
  );
};

export default RandomNews;

const View = ({ news }) => {
  const { img_url, title, country, published_date, summary } = news;

  return (
    <>
      <div className="random-news__banner">
        <img className="random-news__img" src={img_url} alt="banner" />
        <p className="random-news__title">{title}</p>
        <div className="random-news__row">
          <span className="random-news__hour">{published_date}</span>
          <span className="random-news__country">{country}</span>
        </div>
      </div>
      <div className="random-news__description">{summary}</div>
    </>
  );
};
