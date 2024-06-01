import MyContext from '../Context/Mycontext';
import React, { useState } from 'react';

function Mystate(props) {

    const[count,setcount]=useState(0)

    const state = {
        name :"shivanh",
        rollno : 25
    };

    function inc(){
        setcount(count + 1)
    }

    function dec(){
        setcount(count - 1)
    }



    return (
        <MyContext.Provider value={{state , inc , dec , count}}>
            {props.children}
        </MyContext.Provider>

        
    )
}

export default Mystate