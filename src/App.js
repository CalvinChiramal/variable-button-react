import React from 'react';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bg: "#000000",
            height: "70px",
            width: "70px",
            bwidth: "5px",
            bcolor: "black",
            value: "button",
            bradius: "0%"
        }
        this.propertyChange = this.propertyChange.bind(this);
    }

    propertyChange(props) {
        this.setState({ [props.target.id] : props.target.value})
        
    }
    
    render() {
        return (
        <div className="App">
            <button className = "button" 
                    style = {{  backgroundColor: this.state.bg, 
                                height: this.state.height+"px",
                                width:this.state.width+"px",
                                borderColor:this.state.bcolor,
                                borderWidth:this.state.bwidth+"px",
                                borderRadius: this.state.bradius+"%" 
                                }}>
                {this.state.value}
            </button>
            <form className = "list">
                <input type = "color" id = "bg" onChange = {this.propertyChange}/>
                <input type = "text" placeholder = "height (no)" id = "height" onChange = {this.propertyChange}/>
                <input type = "text" placeholder = "width (no)" id = "width" onChange = {this.propertyChange}/>
                <input type = "text" placeholder = "border width(no)" id = "bwidth" onChange = {this.propertyChange}/>
                <input type = "text" placeholder = "border color" id = "bcolor" onChange = {this.propertyChange}/>
                <input type = "text" placeholder = "button text" id = "value" onChange = {this.propertyChange}/>
                <input type = "range"  min = "0" max = "50" step = "1" id = "bradius" defaultValue = "0" onChange = {this.propertyChange}/>
            </form>
        </div>
        );
    }
}

export default App;
