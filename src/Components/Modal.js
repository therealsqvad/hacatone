import React, { Component } from 'react';
import connect from 'react-redux';
import './Modal.css';
import Button from '@material-ui/core/Button'

export class Modal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title : '',
            description : '',
            date : 'YYYY.MM.DD'
        }
    }
    
    handleChangeTitle = event => {
        this.setState ({
            title : event.target.value 
        });
        console.log(this.state);
    }

    handleChangeTextarea = event => {
        this.setState ({
            description : event.target.value
        });
        console.log(this.state);
    }

    handleClick = event => {
        const modal = document.querySelector('.Modal');
        modal.style.display = 'none';
        event.preventDefault();
    }

    changeDate = event => {
        const temp = event.target.value;
        this.setState ({
            date : temp
        });
        console.log(temp);
        console.log(this.state);
    }

    render(){
        return(
            <div className = 'Modal' id = 'Modal'>
                <div className = 'Modal-window'>
                    <form className = 'Modal-window__form' onSubmit = {this.handleClick}>
                    <div className = 'title-information information'>
                        <label className = 'label'>Введите название:</label>
                        <input type = 'text' id = 'title-labe' onChange = {this.handleChangeTitle} />
                        <div className = 'date-description information'>
                            <label className = 'label'>Когда закончим?</label>
                            <input type = 'date'
                            id = 'date' 
                            onChange = {this.changeDate}
                            min = '2018-11-18'
                            max = '2030-11-18'/>
                        </div>
                        </div>
                        <div className = 'plan-description information'>
                            <label htmlFor = 'textarea' className = 'label'>Описание вашей цели:</label>
                            <textarea className =  'textarea'
                             id = 'textarea' 
                             onChange = {this.handleChangeTextarea}
                             rows="10"
                             cols="74"
                             name="text"/> 
                        </div>
                        <Button type = 'submit' variant = 'contained' color = 'primary'>Отправить</Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Modal;