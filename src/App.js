import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  
  isMetaMaskEnabled = () => !!window.web3;

  address = () => {
    console.log("App::address")
    if (!window.web3){
      return null;
    }
    return window.web3.eth.accounts[0]
  }

  sendETH = (address, amount) =>{
    console.log("App::sendETH")
    if (window.web3 && this.address()){
      window.web3.eth.sendTransaction({from:this.address(), to:address,value:window.web3.toWei(amount, "ether")}, function(result, error){
        console.log("result",result)
        console.log("error",error)
      })
    }
      
  }

  testSendETH = () => {
    this.sendETH('0xccE42227f42A01b80Fc374485186bd0feF6B2835', 1)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.isMetaMaskEnabled() ?
            <p>
              Metamask ready
            </p>
             : 
            <p>
              Please install Metamask
            </p>
          }
          {this.address() ? <p>Connected to account {this.address()}</p> : <p>Please unlock Metamask</p> }
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <button onClick={this.testSendETH}> send eth </button>
        </header>
      </div>
    );
  }
}

export default App;
