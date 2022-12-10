import React from 'react';
import './App.css';

function Header() {
  return(
    <div className="header">
       <div className="container">
        <div className="header_logo">
         <img width="38" src="" alt="Pizza logo" />
          <div>
            <h1>React pizza</h1>
            <p>Вкусная пицца</p>
          </div>
        </div>
        <div className="header_cart">
          <a href="/cart.html" className="button button--cart">
            <span>24руб.</span>
          </a>
        </div>
       </div>
    </div>
  );
}

function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className="container">
        <div className='container'>
          <div className='header_logo'>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
