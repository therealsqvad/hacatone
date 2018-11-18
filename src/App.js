import React, { Component } from 'react';
import './style.css';
import connect from 'react-redux';
import Modal from './Components/Modal'
import Button from '@material-ui/core/Button'

class App extends Component {

  handleClick = () => {
    const modal = document.querySelector('.Modal');
    modal.style.display = 'flex';
  }

  render() {
    return (
      <div className="App">
      <Modal />
      <footer className = 'footer'>
            <Button onClick = {this.handleClick} variant = 'contained' color = 'primary'>Выполнить</Button>
          </footer>
      </div>
    );
  }
}

export default App;
