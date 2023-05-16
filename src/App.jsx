import React from 'react'
import Landing from './components/Landing/Landing.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const App = () => {
  return (
    <div  className='container'>
      <h3 className='text-center mt-3'>CoinMarket</h3>
      <Landing/>
    </div>
  )
}

export default App