import './App.css'
import { connect, useSelector, useDispatch} from "react-redux"
import { Text } from './redux/actions'
import { useRef } from 'react'

const App = (props) => {
  // const inputRef = useRef()
  const text = useSelector((state) => state.displayTextReducer.text)
  const dispatch = useDispatch();

  // const handleInputChange = () => {
  //   props.wow(inputRef.current.value);
  // }

  return (
    <>
      <div>
        <h2>Redux - Example</h2>
        <h3>Text = {text}</h3>
        {/* <input ref={inputRef} onChange={handleInputChange} /> */}
        <input onChange={(e) => dispatch(Text(e.target.value))} />
        {/* <button onClick={() => props.wow("wow")}>wow</button> */}
      </div>
    </>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     text: state.displayTextReducer.text
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     wow: (value) => dispatch({type: 'text', payload: value})
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)



export default App
