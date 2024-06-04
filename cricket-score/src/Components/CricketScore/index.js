import { Component } from "react";
import './index.css'
class CricketScore extends Component{
    state={score:0}
    onClick1run=()=>{
        this.setState((prevState)=>({score:prevState.score+1}))
    }
    onClick2run=()=>{
        this.setState((prevState)=>({score:prevState.score+2}))
    }
    onClick3run=()=>{
        this.setState((prevState)=>({score:prevState.score+3}))
    }
    onClick4run=()=>{
        this.setState((prevState)=>({score:prevState.score+4}))
    }
    onClick6run=()=>{
        this.setState((prevState)=>({score:prevState.score+6}))
    }
    onReset=()=>{
        this.setState({score:0})
    }
    render(){
        const{score} = this.state
        return(
            <>
                <div className="background">
                    <h1>CricketScore</h1>
                    <h2>score : {score}</h2>
                    <div>
                        <button onClick={this.onClick1run} className="button1">1 RUN</button>
                        <button onClick={this.onClick2run} className="button2">2 RUNS</button>
                        <button onClick={this.onClick3run} className="button3">3 RUNS</button>
                        <button onClick={this.onClick4run} className="button4">FOUR</button>
                        <button onClick={this.onClick6run} className="button6">SIX</button>
                        <button onClick={this.onReset} className="reset">RESET</button>
                    </div>
                </div>
            </>
        )
    }
}
export default CricketScore