import React from 'react'
import RandomNews from '../randomNews/RandomNews'
import LatestNews from '../latestNews/LatestNews'

const MainPage = () => {
  return (
    <main className='main'>
        <RandomNews/>
        <LatestNews/>
    </main>
  )
}

export default MainPage