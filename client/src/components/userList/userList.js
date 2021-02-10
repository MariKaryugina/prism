import React from 'react';
import UserItem from '../userItem/userItem';

export default class UserList extends React.Component {
    getUserList = () => {
        if (this.props.users && !this.props.users.length) {
            return [];
        }

        let userList = this.props.users.slice();

        if (!this.props.active) {
            userList = userList.filter((user) => user.in);
        }

        if (this.props.searchString) {
            userList = userList.filter((user) => user.fullname.toLowerCase()
            .includes(this.props.searchString.toLowerCase()));
        }

        userList.sort(function(x, y) {
            return (x.in === y.in)? 0 : x.in? -1 : 1;
        });

        return userList.map((user) => <UserItem key={user.id} user={user} />)
    }

    render() {
        return (
            <React.Fragment>
                {this.getUserList()}
            </React.Fragment>
        );
    }
}
