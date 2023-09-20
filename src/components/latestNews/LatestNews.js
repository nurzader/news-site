import React from 'react';
import './latestNews.scss';
import img from './img.jpeg';

const LatestNews = () => {
  return (
    <div className="latest-news">
      <h1>Последние новости</h1>
      <ul className="latest-news__list">
        <li className="latest-news__item">
          <img className='latest-news__banner' src={img} alt="banner" />
          <p className="latest-news__title">Заголовок</p>
          <div className="latest-news__row">
            <span>время </span>
            <span>страна</span>
          </div>
        </li>

      </ul>
    </div>
  );
};

export default LatestNews;
