import React, { Component } from 'react';
import './fat.css';

class Fat extends Component{
    state = {
        count: 0
    }

    render(){
        return(
            <div className="fat">
                <h1>how much do you like kevin's chili</h1>
                {this.state.count > 9 ?
                    <img src="chili2.jpg" alt="kevin"></img> :
                    <img src="chili1.jpg" alt="kevin"></img>
                }
                <span>{this.formatCount()}</span>
                <button onClick={this.handleIncrement}>a lot</button>
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