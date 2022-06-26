import { useFormik } from "formik";
import playersApi from './Players-api';

const PlayersAdd=()=>{

    const validate= values =>{
        const errors={};
        if(values.id===""){
            errors.id="ID is Mandatory";

        }
        if(values.playerName===""){
            errors.playerName="Name is Mandatory";
            
        }
        if(values.PlayerAge===""){
            errors.PlayerAge="Age is Mandatory";
            
        }
        return errors;
    }

    const formik= useFormik({
        
        initialValues:{
            id:"",
            playerName:"",
            playerAge:""
        },
        validate,
        onSubmit: Values=>{
            alert("form submitted");
        }
    })
    return(
        <form onSubmit={formik.handleSubmit}>

 
            <div>
                <label>ID</label><br/>

                <input type="text" name="id" id="id" value={formik.values.id} onChange={formik.handleChange}/><br/>

                <span style={{color:"Red"}}>{formik.errors.id}</span>
            </div>
            <div>
                <label>Player Name</label><br/>

                <input type="text" name="playerName" id="playerName"  value={formik.values.playerName} onChange={formik.handleChange}/><br/>

                <span style={{color:"Red"}}>{formik.errors.playerName}</span>
            </div>
            <div>
                <label>Player Age</label><br/>

                <input type="text" name="playerAge" id="playerAge" value={formik.values.playerAge} onChange={formik.handleChange}/><br/>

                <span style={{color:"Red"}}>{formik.errors.playerAge}</span>
            </div>
            <div>
                <button type="submit">submit</button>
            </div>

        </form>
    )
}

export default PlayersAdd;