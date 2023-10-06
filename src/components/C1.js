import { Component } from "react";

class C1 extends Component
{
    constructor (props){
        super(props);
        this.state = {role: "Engineer", name:"", bool:true};
    }

    dobuleClick = ()=>{
        this.setState({
            role: "Engineer"
        })
    }

    handleClick = ()=>{
        this.setState({
            role:"Doctor"
        })
    }
    handleChange = (e)=>{
        this.setState({
            name: e.target.value
        })
    }

    handleSignal = ()=>{
        this.setState({
            bool: !this.state.bool
        })
    }

    render(){
        return(
            <div>
                <h1> Props value is {this.props.gift}</h1>
                <h1>State value is {this.state.role}</h1>
                <button onClick={this.handleClick} onDoubleClick={this.dobuleClick}>Click to change/double click to reset</button>
                <input placeholder="Enter your name" onChange={this.handleChange}/>
                <p>Your name is: {this.state.name}</p>
                <button onClick={this.handleSignal}>Signal</button>
                {(this.state.bool)? <h1 style={{color:"green"}}>Go</h1>:<p style={{color:"red"}}>Stop</p>}
            </div>
        )
    }
}

export default C1;