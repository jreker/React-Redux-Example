import React, {useEffect} from 'react';

//Dumb component only for viewing the data.
const User = ({user, setUserName, fetchUser}) => {

    //fetch user on startup
    useEffect(() => {
       fetchUser();
    },[]) //EMPTY ARRAY TO RUN IT ON LOAD AND UNLOAD // OR YOU CAN SPECIFY A VARIABLE AND EFFECT WILL RUN EVERYTIME WHEN THE VARIABLE CHANGES
   
    return (
        <div>        
            { user.Name }
            <input onChange={(e) =>  setUserName(e.target.value) } /><br/>
            <button onClick={(e) =>  fetchUser()}>Dispatch</button>
            <div>{user.name}</div>
        </div>
    )
}
export default User;