import React from 'react';
import UserItem from '../userItem/userItem';

export default class VacancyList extends React.Component {
    getVacancyList = () => {
        let userList = this.props.users.slice();
        if (!this.props.active) {
            userList = userList.filter((user) => user.in);
        }
        if (this.props.searchString) {
            userList = userList.filter((user) => user.fullname.toLowerCase().includes(this.props.searchString.toLowerCase()))
        }
        userList.sort(function(x, y) {
            return (x.in === y.in)? 0 : x.in? -1 : 1;
        });

        return userList.map((user) => <UserItem key={user.id} user={user} />)
    }

    render() {
        return (
            <React.Fragment>
                {this.getVacancyList()}
            </React.Fragment>
        );
    }
}
