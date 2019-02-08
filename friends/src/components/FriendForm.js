import React from 'react';

class FriendForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
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

export default FriendForm