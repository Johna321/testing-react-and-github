import React, { Component } from 'react';
import './fat.css';

class Fat extends Component{
    state = {
        count: 0,
        inputValue: ''
    }

    render(){
        return(
            <div className="fat">
                <h1>git fat git</h1>
                <span>{this.formatCount()}</span>
                <button onClick={this.handleIncrement}>yo a button</button>
                <h1></h1>
                <form>
                    <input value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                </form>
                <span>{this.formatInputValue()}</span>
                <span>{this.formatBush()}</span>
            </div>
        );
    }

    updateInputValue(evt){
        this.setState({inputValue: evt.target.value})
    }

    formatInputValue(){
        const { inputValue } = this.state;
        return(
            inputValue === '' ? <h3></h3> : <h3>{inputValue}</h3>
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

    formatBush(){
        return(
            this.state.inputValue === 'bush did 911' ? <p>true</p> : <p>false</p>
        );
    }

}

export default Fat;