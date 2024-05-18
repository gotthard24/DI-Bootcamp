import { useRef } from "react"
import { useDispatch} from 'react-redux'
import { setCurrentDate } from "./TaskSlice";

const DateSelector = (props) => {
    const dispatch = useDispatch();
    const dateRef = useRef();
    return(
        <div>
            <label htmlFor="date">Choose the date </label> {" "}
            <input onChange={() => dispatch(setCurrentDate(dateRef.current.value))} 
            ref={dateRef} name='date' type="date" />
        </div>
    )
}

export default DateSelector