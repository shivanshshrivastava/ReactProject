import './App.css'
import Comp1 from './Components/Comp1'
import Comp2 from './Components/Comp2'
import CounterRedux from './Components/CounterRedux'
import MyState from './Context/Mystate'

function App() {
  

  return (
  <>
  <MyState>
  <Comp1/>
  <Comp2/>
  <CounterRedux/>
  </MyState>
  </>
  )
}

export default App
