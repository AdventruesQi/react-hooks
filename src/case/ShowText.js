import React ,{useContext}from 'react';
import { ColorContext } from './Color';

function ShowText(){
    const {color}=useContext(ColorContext);
    return (
        <div style={{color:color}}>文字的颜色</div>
    )
}
export default ShowText;