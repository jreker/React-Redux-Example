import React, {useEffect} from 'react';

//Dumb component only for viewing the data.
const UserViewer = ({user, setUserName, fetchUser}) => {

    //fetch user on startup
    useEffect(() => {
        fetchUser();
     },[fetchUser]) //EMPTY ARRAY TO RUN IT ON LOAD AND UNLOAD // OR YOU CAN SPECIFY A VARIABLE AND EFFECT WILL RUN EVERYTIME WHEN THE VARIABLE CHANGES
    return (
        //With inline css styles as example
        <div>        
            <p style={{fontSize: "0.7em"}}>The Username will change with the onChange event.</p>
            Username:
            <input onChange={(e) =>  setUserName(e.target.value) } />
            <button onClick={(e) =>  fetchUser()}>Fetch User from "Repo"</button>
            <div style={{fontSize: "1.2em", marginTop: "10px"}}>Username: {user.name}</div>
        </div>
    )
}
export default UserViewer;