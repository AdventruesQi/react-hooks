import React from 'react';
import ShowText from './ShowText';
import Buttons from './Buttons';
import { Color } from './Color';

function Case(){
    return (
        <div>
            <Color>
                <ShowText/>
                <Buttons></Buttons>
            </Color>
        </div>
    )
}
export default Case;