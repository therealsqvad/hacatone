/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable camelcase */
import React, { Component } from 'react';
import './Modal.css';
import Button from '@material-ui/core/Button';
import store from '../index';
import { addTodo } from '../actions';

export class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      date: 'YYYY.MM.DD'
    };
  }

    handleChangeTitle = event => {
      this.setState({
        title: event.target.value
      });
      console.log(this.state);
    }

    handleChangeTextarea = event => {
      this.setState({
        description: event.target.value
      });
      console.log(this.state);
    }

    handleClick = event => {
      event.preventDefault();

      let inTitle = document.getElementById('title-label');
      let inDescription = document.getElementById('textarea');
      let inDeadline = document.getElementById('date');

      if (!inTitle.value.trim() && !inDeadline.value.trim() && !inDescription.value.trim()) {
        return;
      }
      const id = store.getState().todos.length;

      store.dispatch(addTodo(inTitle.value, inDescription.value, inDeadline.value, id));
      inTitle.value = '';
      inDescription.value = '';
      inDeadline.value = '';

      const modal = document.querySelector('.Modal');

      modal.style.display = 'none';
      // event.preventDefault();
    }

    changeDate = event => {
      const temp = event.target.value;
      const temp_arr = temp.split('-');
      const new_temp = `${temp_arr[2]}-${temp_arr[1]}-${temp_arr[0]}`;

      this.setState({
        date: new_temp
      });
      console.log(temp);
      console.log(this.state);
    }

    render() {
      return (
        <div className="Modal" id="Modal">
          <div className="Modal-window">
            <form className="Modal-window__form" onSubmit={this.handleClick}>
              <div className="title-information information">
                <label className="label">Введите название:</label>
                <input type="text" id="title-label" onChange={this.handleChangeTitle} />
                <div className="date-description information">
                  <label className="label">Когда закончим?</label>
                  <input
                    type="date"
                    id="date"
                    onChange={this.changeDate}
                    min="2018-11-18"
                    max="2030-11-18"
                  />
                </div>
              </div>
              <div className="plan-description information">
                <label htmlFor="textarea" className="label">Описание вашей цели:</label>
                <textarea
                  className="textarea"
                  id="textarea"
                  onChange={this.handleChangeTextarea}
                  rows="10"
                  cols="74"
                  name="text"
                />
              </div>
              <Button type="submit" variant="contained" color="primary">Отправить</Button>
            </form>
          </div>
        </div>
      );
    }
}

export default Modal;
