import './App.css';
import Article from './components/Article';
import Header from './components/Header'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [APIData, setAPIData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/api/articles`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])

  return (
    <div className="main">
      <header className="main-header">
        <Header />
      </header>
      <body>
        {APIData.map((data, i) => {
          return (
            <div className="article">
              <Article
                key={i}
                {...data} 
              />
            </div>
          )
        })}
      </body>
    </div>
  );
}

export default App;
