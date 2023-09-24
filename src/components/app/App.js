import React from 'react';
import Header from '../header/Header';
import MainPage from '../pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import NewsInnerPage from '../pages/NewsInnerPage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/news/:id" element={<NewsInnerPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
