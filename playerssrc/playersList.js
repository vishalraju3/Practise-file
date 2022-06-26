import react from "react";
import playersApi from "./Players-api";


class PlayersList extends react.Component{
    state={
        PlayersList:[]
    }

    constructor(props){
        super(props);
     //  this.state.PlayersList=[{"playerName":"ABCD"}];
      //  this.setState({PlayersList:[{"playerName" : "ABCD"}]});
    }
    componentDidMount=()=>{
        playersApi.getplayers().then(res=>res.json()).then(result=>this.setState({PlayersList : result}));
    }


    render(){
        return(
            <div>
                <a href="/Players/Add">Add Player</a>
                <ul>
                    <li>{this.state.PlayersList.length}</li>
                </ul>

            </div>
        )
    }
}

export default PlayersList;