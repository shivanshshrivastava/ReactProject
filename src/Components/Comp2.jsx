import myContext from "../Context/Mycontext"
import { useContext } from 'react'

function Comp2() {
    const context = useContext(myContext)
    const {inc , dec , count} = context
    //console.log(context)

    return (
        <>
        <button onClick={inc}>Increase</button>
        <p>{count}</p>
        <button onClick={dec}>Decrease</button>        
        </>
    )
}

export default Comp2