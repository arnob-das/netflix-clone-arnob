import React from 'react';
import "./App.css";
import Row from './Row'
import requests from './requests'

function App() {
  // console.log(requests.fetchNetflixOriginals)
  return (
    <div className="App">
      <h1>Hey Arnob</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;