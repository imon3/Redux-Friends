import React from 'react'

class FriendsList extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                <div>{this.props.friend.name}</div>
                <div>{this.props.friend.age}</div>
                <div>{this.props.friend.email}</div>
            </div>
        )
    }

}

export default FriendsList;