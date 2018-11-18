/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable react/sort-comp */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import localforage from 'localforage';
import Button from '@material-ui/core/Button';
import { Checkbox } from '@material-ui/core';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';
import Footer from './Footer';
import '../style.css';
// import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import Modal from './Modal';
import store from '../index';
import { actLogin } from '../actions';

class Apps extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      isAdmin: false,
      isAuth: false,
      isReg: true
    };
  }

  handleClick = () => {
    const modal = document.querySelector('.Modal');

    modal.style.display = 'flex';
  }

  handleInputChange(e) {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    this.setState({
      [e.target.name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = {
      name: this.state.name,
      password: this.state.password,
      isAdmin: this.state.isAdmin
    };

    this.setState({
      isAuth: true
    });
    localforage.setItem(user.name, { ...user, plans: [] });
    // console.log(localforage.getItem(user.name));
  }

  handleSubmitLogin(user) {
    localforage.getItem(user.name)
      .then(value => {
        // console.log(value);
        if (value.password === user.password) {
          this.setState({
            name: '123',
            password: value.password,
            isAdmin: value.isAdmin,
            isAuth: true
          });
          console.log('login', this.state.name);

          store.dispatch(actLogin(this.state.name));
        } else {
          alert('Неправильный пароль');
        }
      });
    // console.log(localforage.getItem(user.name));
  }

  handleSubmitLogout(name) {
    localforage.getItem(name)
      .then(value => {
        this.setState({
          name: '',
          password: '',
          isAdmin: '',
          isAuth: false
        });
        console.log(this.state);
      })
      .catch(err => {
        alert('Такого пользователя не существует');
      });
  }

  handleReg = e => {
    e.preventDefault();
    this.setState({ isReg: e.target.checked });
  }

  render() {
    const { isReg } = this.state;

    return (
      <div className="App">

        {
          !this.state.isAuth
            && (
              <div>
                <Checkbox id="Reg" onChange={e => this.handleReg(e)} />
                <label htmlFor="Reg">Зарегистрироваться ?</label>
                <div hidden={isReg}>
                  <Register
                    name={this.state.name}
                    password={this.state.password}
                    isAdmin={this.state.isAdmin}
                    isAuth={this.state.isAuth}
                    handleInputChange={e => this.handleInputChange(e)}
                    handleSubmit={e => this.handleSubmit(e)}
                    hidden={this.state.isReg}
                  />

                </div>
                <div hidden={!isReg}>
                  {' '}
                  <Login
                    name={this.state.name}
                    password={this.state.password}
                    isAdmin={this.state.isAdmin}
                    isAuth={this.state.isAuth}
                    handleInputChange={e => this.handleInputChange(e)}
                    handleSubmit={e => this.handleSubmitLogin(e)}
                  />
                  {' '}

                </div>
              </div>
            )
        }
        {
          this.state.isAuth
            && (
              <div>


                <Modal />


                {/* <AddTodo /> */}
                <VisibleTodoList />
                <Footer />
                <footer className="footer">
                  <Button onClick={this.handleClick} variant="contained" color="primary">Выполнить</Button>
                  <Logout
                    name={this.state.name}
                    isAuth={this.state.isAuth}
                    handleSubmit={e => this.handleSubmitLogout(e)}
                  />
                </footer>
              </div>
            )
        }

      </div>
    );
  }
}

export default Apps;
