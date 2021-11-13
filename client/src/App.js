import './App.css';
import {useEffect, useState} from "react";
import Article from './components/Article';
import Header from './components/Header'

function App() {
  return (
    <div className="main">
      <header className="main-header">
      <Header />
      <Article />
      </header>
    </div>
  );
}

export default App;
