/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import Checkbox from '@material-ui/core/Checkbox';

class Register extends Component {
  render() {
    if (this.props.isAuth) {
      return <div />;
    }
    return (
      <div className="container">
        <h2>Регистрация</h2>
        <form>
          <div className="form-group">
            <Input
              type="text"
              placeholder="Имя"
              className="form-control form-control-lg"
              name="name"
              onChange={e => this.props.handleInputChange(e)}
              value={this.props.name}
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="Пароль"
              className="form-control form-control-lg"
              name="password"
              onChange={e => this.props.handleInputChange(e)}
              value={this.props.password}
            />
          </div>
          <div>
            <Checkbox
              id="checkbox"
              type="checkbox"
              name="isAdmin"
              checked={this.props.isAdmin}
              onChange={e => this.props.handleInputChange(e)}
            />
            <label htmlFor="checkbox">Руководитель</label>
          </div>
          <div className="form-group">
            <Button
              variant="contained"
              color="primary"
              type="button"
              onClick={e => this.props.handleSubmit(e)}
              className="btn btn-primary "
            >
                        Зарегистрировать
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
