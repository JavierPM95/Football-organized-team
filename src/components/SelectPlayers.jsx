import React, { Component } from 'react';
import Alternate from './Alternate';
import Mainline from './Mainline';

export default class SelectPlayers extends Component {
    render() {
        return (
            <section>
                <Mainline/>
                <Alternate/>
            </section>
        )
    }
}
