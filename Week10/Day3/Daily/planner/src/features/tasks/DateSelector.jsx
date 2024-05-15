import { useRef } from "react"
import { useDispatch} from 'react-redux'
import { SET_CURRENT_DATE } from "./TaskReducer";

const DataSelector = (props) => {
    const dispatch = useDispatch();
    const dateRef = useRef();
    return(
        <div>
            <label htmlFor="date">Choose the date </label> {" "}
            <input onChange={() => dispatch({type: SET_CURRENT_DATE, payload: dateRef.current.value})} 
            ref={dateRef} name='date' type="date" />
        </div>
    )
}

export default DataSelector