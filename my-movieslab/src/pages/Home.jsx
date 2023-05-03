import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

 const Home = () => {
  return (
    <div>
        <Main />
        <Row title='Discover'     fetchURL={requests.requestDiscover} />
        <Row title='Episode'      fetchURL={requests.requestEpisode} />
        <Row title='Movie'        fetchURL={requests.requestMovie} />
        <Row title='Popular'      fetchURL={requests.requestPopular} />
        {/*<Row title='Translations' fetchURL={requests.requestTranslations} />*/}
        {/*<Row title='Latest'       fetchURL={requests.requestLatest} />*/}
        <Row title='Up Coming'    fetchURL={requests.requestUpcoming} />
    </div>
  )
}
export default Home