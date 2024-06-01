import { useContext } from 'react'
import Mycontext from '../Context/Mycontext'

function Comp1() {

    const context = useContext(Mycontext)
    const {name , rollno} = context
    //console.log(context)
  return (
    <>
    <div>Name : {name}</div>
    <div>RollNo :{rollno}</div>
    </>
  )
}

export default Comp1