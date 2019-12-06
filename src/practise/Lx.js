import React, { Component } from 'react';
import Viewtext from './Viewtext';
import { Col } from './Col';
import Btns from './Btns';
function Lx(){
    return (
        <div>
            <Col>
                <Viewtext/>
                <Btns/>
            </Col>
        </div>
    )
}
export default Lx;