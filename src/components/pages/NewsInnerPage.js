import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import NewsService from '../../services/NewsService';
import Spinner from '../spinner/Spinner';

const NewsInnerPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    onRequest();
  }, []);

  const { getNew } = NewsService();

  const onNewsLoading = () => {
    setLoading(true);
  };

  const onNewsLoaded = (news) => {
    setLoading(false);
    setNews(news);
  };

  const onRequest = () => {
    onNewsLoading();
    getNew(id).then(onNewsLoaded);
  };

  const spinner = loading ? <Spinner /> : null;

  return (
    <div>
      {spinner}
      {!(loading || !news) ? (
        <div className="news-page">
          <Link to="/" className="news-page__backLink">
            Back to all
          </Link>
          <h3>{news.title}</h3>
          <div className="news-page__top">
            <p>
              By {news.author}, <span>{news.country}</span>
            </p>
            <p>Updated {news.published_date}</p>
            <p>
              Link:
              <Link to={news.link} className="news-page__link">
                link
              </Link>
            </p>
          </div>
          <hr />
          <div className="news-page__content">
            <div className="news-page__banner">
              <img src={news.img_url} alt="banner" />
            </div>
            <p>{news.summary}</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NewsInnerPage;
