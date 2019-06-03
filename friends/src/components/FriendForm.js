import React from 'react';
import { connect } from 'react-redux';

import { postFriend } from '../actions'

class FriendForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            friend: {
                name: '',
                age: '',
                email: ''
            }
        }
    }
    handleChange = e => {
        this.setState({
            friend: {
                ...this.state.friend,
                [e.target.name]: e.target.value
            }
        })

        console.log(e.target.name, e.target.value)
    }

    postFriend = e => {
        e.preventDefault();
        this.props.postFriend(this.state.friend);
        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.postFriend}>
                    <input type='text' placeholder='Name' onChange={this.handleChange} name='name' value={this.state.friend.name} />
                    <input type='number' placeholder='Age' onChange={this.handleChange} name='age' value={this.state.friend.age} />
                    <input type='email' placeholder='Email' onChange={this.handleChange} name='email' value={this.state.friend.email} />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        postFriend: state.postFriend
    }
}

export default connect(mapStateToProps, { postFriend })(FriendForm);