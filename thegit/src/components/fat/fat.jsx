import React, { Component } from 'react';
import './fat.css';

class Fat extends Component{
    state = {
        count: 0
    }

    render(){
        return(
            <div className="fat">
                <h1>git fat git</h1>
                <span>{this.formatCount()}</span>
                <button onClick={this.handleIncrement}>yo a button</button>
            </div>
        );
    }

    handleIncrement= () => {
        this.setState({count: this.state.count + 1});
        console.log(this.state.count);
    }

    formatCount(){
        const { count } = this.state;
        return(
            count === 0 ? <h3>zero</h3> : <h3>{count}</h3>
        );
    }

}

export default Fat;