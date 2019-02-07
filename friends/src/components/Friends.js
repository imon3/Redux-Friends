import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FriendsList from './FriendsList';


class Friends extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            friends: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res.data)
                this.setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                {this.state.friends.map((friend, index) => {
                    return (
                        <div>
                            <FriendsList friend={friend} key={index} />
                        </div>
                    )
                })}
                <form>
                    <input type='text' placeholder='Name' />
                    <input type='number' placeholder='Age' />
                    <input type='email' placeholder='Email' />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends
})

export default connect(mapStateToProps, {})(Friends);