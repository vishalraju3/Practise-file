
import axios from 'axios';


const apiUrl="http://localhost:7720/";

var DataService={
    listEmployees:(requestobject)=>{
        axios.get(apiUrl+"api/Employees/List")
        .then(function(response){
            console.log(response);

        })
        .catch(function(error){

        })

    }
}

export default DataService;