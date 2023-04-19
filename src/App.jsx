import React from 'react'
import './App.css'
import CreateAccount from './scenes/Account/CreateAccount';
import AACreateAccount from './scenes/Account/AACreateAccount';
import ETHTaipeiLogo from './assets/ETHTaipei.jpg';

function App() {

  return (
    <div className="App">
      <img src={ETHTaipeiLogo} width="300" height="150" />
      <div id="MainPage">
      <div id="div1">
        <div className="TopTitle">HD Wallet</div>
        <div><CreateAccount /></div>
      </div>
      <div id="div2">
        <div className="TopTitle">AA Wallet</div>
        <div><AACreateAccount /></div>
      </div>
      </div>
    </div>
  )
}

export default App
