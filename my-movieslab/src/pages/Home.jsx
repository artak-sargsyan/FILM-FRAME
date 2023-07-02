import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

 const Home = () => {
  return (
    <div>
        <Main />
        <Row slideId='1row' title='Discover'     fetchURL={requests.requestDiscover} />
        <Row slideId='2row' title='Episode'      fetchURL={requests.requestEpisode} />
        <Row slideId='3row' title='Movie'        fetchURL={requests.requestMovie} />
        <Row slideId='4row' title='Popular'      fetchURL={requests.requestPopular} />
        {/*<Row title='Translations' fetchURL={requests.requestTranslations} />*/}
        {/*<Row title='Latest'       fetchURL={requests.requestLatest} />*/}
        <Row slideId='5row' title='Up Coming'    fetchURL={requests.requestUpcoming} />
    </div>
  )
}
export default Home