import React, { Component } from 'react';


export default class Counter extends Component {
    state={
        count:0
    };
    
    style={
        fontSize:50,
        fontWeight: 'bold',
        color: 'red'
    };
    
    
    render() { 
        return (
            <React.Fragment> 
                <span style={this.style} className={this.getClassName()}>{this.formatState()}</span>
                <button onClick={this.increaseCounter} className='btn btn-primary'>Increment</button>
            </React.Fragment>
        )        
    }
    
    getClassName(){
        let classes='btn btn-';
        classes+= this.state.count===0? 'warning':'primary';
        return classes;
    }
    formatState(){
            const {count}=this.state;
            return count==0 ? <h1>Zero</h1>:count ;
        }
    
    increaseCounter=()=>{
        let {count}=this.state;
        this.setState({count: count});
    }
     
}
