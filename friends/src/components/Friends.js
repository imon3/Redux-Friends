import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import FriendsList from './FriendsList';
import FriendForm from './FriendForm';


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
                        <FriendsList friend={friend} key={index} />
                    )
                })}
                <FriendForm />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    friends: state.friends
})

export default connect(mapStateToProps, {})(Friends);