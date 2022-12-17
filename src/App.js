import React from 'react'
import './App.css'

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header_logo">
          <img width="38" src="../public/images/Los_pollos" alt="Pizza logo" />
          <div>
            <h1>Los pollos Pizza</h1>
            <p>Вкусная пицца </p>
          </div>
        </div>
        <div className="header_cart">
          <a href="/cart.html" className="button button--cart">
            <span>24руб.</span>
          </a>
        </div>
      </div>
    </div>
  )
}
function Categories() {
  return (
    <div className="categories">
      <ul>
        <li className="active">Все</li>
        <li>Мясные</li>
        <li>Гриль</li>
        <li>Вегетарианская</li>
        <li>Острые</li>
        <li>Закрытые</li>
      </ul>
    </div>
  )
}

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content_top">
            <Categories />
            <div className="sort">
              <div className="sort_label"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
