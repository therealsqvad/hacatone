/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import localforage from 'localforage';
import Register from './Register';
import Login from './Login';
import Logout from './Logout';

class Apps extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      password: '',
      isAdmin: false,
      isAuth: false
    };
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
        if (value.password === user.password) {
          this.setState({
            name: value.name,
            password: value.password,
            isAdmin: value.isAdmin,
            isAuth: true
          });
          console.log(this.state);
        } else {
          alert('Неправильный пароль');
        }
      })
      .catch(err => {
        alert('Такого пользователя не существует');
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

  render() {
    return (
      <div className="App">

        {
          !this.state.isAuth
            && (
              <div>
                <Register
                  name={this.state.name}
                  password={this.state.password}
                  isAdmin={this.state.isAdmin}
                  isAuth={this.state.isAuth}
                  handleInputChange={e => this.handleInputChange(e)}
                  handleSubmit={e => this.handleSubmit(e)}
                />
                <Login
                  name={this.state.name}
                  password={this.state.password}
                  isAdmin={this.state.isAdmin}
                  isAuth={this.state.isAuth}
                  handleInputChange={e => this.handleInputChange(e)}
                  handleSubmit={e => this.handleSubmitLogin(e)}
                />
              </div>
            )
        }
        {
          this.state.isAuth
            && (
              <div>
                <Logout
                  name={this.state.name}
                  isAuth={this.state.isAuth}
                  handleSubmit={e => this.handleSubmitLogout(e)}
                />
              </div>
            )
        }

      </div>
    );
  }
}

export default Apps;
