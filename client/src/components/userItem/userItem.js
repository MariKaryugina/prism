import React from 'react';
import './index.css';
import UserModal from '../modal/modal';

export default class UserItem extends React.Component {
    constructor() {
        super()
        this.state = {
            isOpen: false,
        }
    }

    changeModalState = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        })
    }
    
    getContainerStyle = () => {
        return this.props.user.in ? '' : 'out-of-office';
    };

    getImg = () => 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg';

    render() {
        const { user } = this.props;

        return (
            <div className={'user-container'}>
                <div className={'user-inside-container'} onClick={this.changeModalState}>
                    <div className={'user-a'}>
                        <img
                            className={`user-img ${this.getContainerStyle()}`}
                            src={user.imgUrl || this.getImg()}
                            alt='https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg'
                        />
                    </div>
                    <div className='user-info-container'>
                        <div className='user-info-fullname'>
                            {user.fullname || 'Not have info now'}
                        </div>
                        <div className='user-info-location'>
                            {user.location || 'Not have info now'}
                        </div>
                    </div>
                </div>
                <UserModal open={this.state.isOpen} user={user} closeModal={this.changeModalState}/>
            </div>
        );
    }
}
