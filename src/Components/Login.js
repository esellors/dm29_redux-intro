import React from 'react';
import { Link } from 'react-router-dom';
import store, { UPDATE_USERNAME } from '../redux/store';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            let action = {
                type: UPDATE_USERNAME,
                payload: this.state.username
            };
    
            store.dispatch(action);
        })
    }

    render() {
        return (
            <div>
                <input name='username' placeholder='enter username' onChange={this.handleChange} />
                <input name='password' placeholder='enter password' onChange={this.handleChange} />
                <Link to='/profile'>Log in</Link>
            </div>
        );
    }


}