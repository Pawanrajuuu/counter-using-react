import { Component } from 'react'
import "./index.css"
class Counter extends Component{
    state ={count:0}
    onIncrement = ()=>{
        this.setState((prevState) =>({count:prevState.count+1}))
    }
    onDecrement = ()=>{
        this.setState((prevState)=>({count:prevState.count-1}))
    }
    onReset =()=>{
        this.setState({count:0})
    }
    render(){
        const {count} = this.state
        return(
            <>
                <div className="background">
                    <h3>Counter</h3>
                    <h1>{count}</h1>
                    <div>
                    <button className="button" onClick={this.onIncrement}>Increase</button>
                    <button className="button" onClick={this.onReset}>reset</button>
                    <button className="button" onClick={this.onDecrement}>Decrease</button>
                    </div>
                </div>

            </>
        )
    }
}
export default Counter