import React, {Component} from 'react';
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    render() {
        return (
            <div>
                <p>点击数字增加：1{this.state.count}</p>
                <button
                    onClick={this
                    .addOne
                    .bind(this)}>One_plus</button>
            </div>
        );
    }
    addOne() {
        this.setState(() => {
            return {
                count: this.state.count + 1
            }
        })
    }
}

export default Example;