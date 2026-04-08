import { Component } from "react";
import "../css/Menu.css"

class Menu extends Component {

    componentDidMount(){
        console.log("compound Mounterd")
    }
    shouldComponentUpdate(nextProps,nextState){
        if(nextState.count===1){
            return false
        }
    }
    componentDidUpdate(){
        console.log("component didUpdate")

    }
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }

    render(){
        <div>
            <h1>Menu</h1>
            <ul>
                <li>Sports</li>
                <li>Entertainment</li>
                <li>Politics</li>
                <li>World</li>
            </ul>
            <h2>{this.state.count}</h2>
            <button style={{backgroundColor:"blue",color:"white",width:"100px",height:"30px"}}
            onclick={this.handleIncrement}>Increment</button>
        </div>
    }
}
export default Menu

