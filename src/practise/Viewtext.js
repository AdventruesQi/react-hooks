import React, { useContext } from 'react';
import { ShareColor } from './Col';

function Viewtext(){
    const {color}=useContext(ShareColor)
    return (
        <div style={{color:color}}> 文字的颜色</div>
    )
}
export default Viewtext;