var  playersApi={
    savePlayers:(player)=>{
        fetch("http://localhost:3011/players",{
           method:"POST" ,
           body:JSON.stringify(player),
           headers:{
               "Content_Type":"application/json"
           }
        })
        .then(res=>res.json())
        .then(result=> console.log(result));
    },

    getplayers :()=>{
      return fetch("http://localhost:3011/players");

      


    }



}

export default playersApi;