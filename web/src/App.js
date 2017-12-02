import React, { Component } from 'react';
import './App.css';
import Web3 from 'web3';
// const Contract = require("truffle-contract");

const getWeb3 = () => {
  // if (typeof web3 !== 'undefined') {
  //   return new Web3(window.web3.currentProvider);
  // } else {
    // set the provider you want from Web3.providers
    return new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
  // }
}

const web3 = getWeb3();

const contract = web3.eth.contract({
  "contractName": "Money",
  "abi": [
    {
      "constant": false,
      "inputs": [
        {
          "name": "amountOfFuckingMoney",
          "type": "uint256"
        }
      ],
      "name": "put",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "initialFuckingMoney",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    }
  ],
  "bytecode": "0x6060604052341561000f57600080fd5b6040516020806100f683398101604052808051600055505060c1806100356000396000f30060606040526004361060485763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416633f81a2c08114604d5780636d4ce63c146062575b600080fd5b3415605757600080fd5b60606004356084565b005b3415606c57600080fd5b6072608f565b60405190815260200160405180910390f35b600080549091019055565b600054905600a165627a7a72305820c76aa416ad9c33fc4b563bce9e4c16878b11c1163c2bb2e5a924efac21de45c40029",
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2017-12-02T20:25:53.210Z"
}.abi);

// list out all the accounts
web3.eth.getAccounts((error, accounts) => {
  const storage = contract.new({from: accounts[0], gas: 300000});
  console.log(storage);
  console.log('accounts', accounts);

  web3.eth.defaultAccount = accounts[0]
  // this works
  console.log(contract.at(accounts[0]).get());
  // console.log(storage.get());

  // this does not
  // https://ethereum.stackexchange.com/questions/2086/cannot-perform-write-functions-in-smart-contract-invalid-address
  contract.at(accounts[0]).put(1, { from: accounts[1] });
  // storage.put(1, { from: accounts[1] });

  console.log(contract.at(accounts[0]).get());

});

class App extends Component {
  render() {
    return (
      <div className="App">
        ShitCoin
      </div>
    );
  }
}

export default App;
