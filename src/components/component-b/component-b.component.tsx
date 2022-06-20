import * as React from 'react';

import './component-b.styles.scss';

// normal static import
import image from '../../assets/sammy.jpeg';

const ComponentB: React.FC = (): JSX.Element => {
    const a = 2 + 3;

    console.log('image', image);

    return (
        <div className="sass-wrapper">
            <h2>this is component css test (scss)</h2>
            <p className="white">{a}</p>
        </div>
    );
};

export default ComponentB;
