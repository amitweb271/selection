import React from 'react'

import { Option } from './Option'

const Options = () => {
    const options = ['Read', 'Blue', 'Green'];
    return (
        <div className='container'>
            <Option options={options} />
        </div>
    );

}

export default Options;


