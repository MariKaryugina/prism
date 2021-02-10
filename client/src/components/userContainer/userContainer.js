import React from 'react';
import './index.css';
import UserList from '../userList/userList';

export default class UserContainer extends React.Component {

    render() {
        return (
            <div className='user-main-container'>
                <div className='users-table'>
                    <UserList
                        users={this.props.users}
                        active={this.props.active}
                        searchString={this.props.searchString}
                    />
                </div>
            </div>
        );
    }
}
