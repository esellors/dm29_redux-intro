import React from 'react';
import store, { UPDATE_FAVSHOW } from '../redux/store';
// import store, { UPDATE_FAVSHOW } from '../redux/store';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
            username: store.getState().username,
            favShow: store.getState().favShow
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({ favShow: store.getState().favShow })
        })
    }

    handleChange = e => {
        let action ={
            type: UPDATE_FAVSHOW,
            payload: e.target.value
        }

        store.dispatch(action)
    }

    render() {
        return (
            <div>
                <h1>Welcome, {this.state.username}</h1>
                <input placeholder='your fav show here' onChange={this.handleChange} />
            <h1>Your fav show is: {this.state.favShow}</h1>
            </div>
        )
    }
}