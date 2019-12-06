import React, { useState} from 'react';

function ExampleHook(){
    const [count,setCount]=useState(0);
    
    return (
        <div>
            <p>你点击了{count}次</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}
export default  ExampleHook;