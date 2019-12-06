import React, { useState } from 'react';

function ExampleManyVar(){
    const [name,setName]=useState("达摩会武术");
    const [age,setAge]=useState(24);
    const [work,setWork]=useState("前端小菜鸡");
    return(
        <div>
            <p>我叫{name}</p>
            <p>今年{age}</p>
            <p>我是一名{work}</p>
        </div>
    )
}
export default ExampleManyVar