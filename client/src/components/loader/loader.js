import React from 'react';
import './index.css';

export default class Loader extends React.Component {

    render() {
        return (
            <div class="wrapper">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
                <div class="shadow"></div>
            </div>
        );
    }
}
