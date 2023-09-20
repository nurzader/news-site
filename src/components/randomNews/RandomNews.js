import React from 'react';
import './randomNews.scss';
import img from './banner.jpeg';

const RandomNews = () => {
  return (
    <article className="random-news">
      <div className="random-news__banner">
        <img className="random-news__img" src={img} alt="banner" />
        <p className="random-news__title">Заголовок</p>
        <div className="random-news__row">
          <span className="random-news__hour">время </span>
          <span className="random-news__country">страна</span>
        </div>
      </div>
      <div className="random-news__description">описание</div>
    </article>
  );
};

export default RandomNews;
