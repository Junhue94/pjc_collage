import React, { Component } from 'react';

import Aux from '../../utils/Auxiliary/Auxiliary';
import CollageCanvas from '../../components/Canvas/Collage';

class Home extends Component {
    componentDidMount() {
        console.log('Home');
    }

    render() {
        return (
            <Aux>
                <div>This is home</div>
                <CollageCanvas />
            </Aux>
        );
    }
}

export default Home;
