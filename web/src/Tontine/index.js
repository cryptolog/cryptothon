import React, { Component } from 'react';
import Tontine from "./components/Tontine";
import './tontine.css';
import {
  login,
} from "./contract";

class TontineContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Tontine
      />
    );
  }
}

export default Tontine;
