import { useSelector, useDispatch} from 'react-redux'
import { ageIncrementAsync, ageDecrementAsync } from './ageCounterSlice'
import logo from '../../assets/react.svg'
import './ageCss.css'

const AgeCounter = (props) =>{
    const age = useSelector((state) => state.ageCounterReducer.count)
    const status = useSelector((state) => state.ageCounterReducer.status)
    const dispatch = useDispatch()

    if(status === 'pending'){
        return (
            <>
                <img className='spinner' src={logo} alt="" />
                <h2>Loading ...</h2>
            </>
        )
    }
    return(
        <div>
            <h2>Age = {age}</h2>
            <button onClick={() => dispatch(ageIncrementAsync())}> + </button>
            <button onClick={() => dispatch(ageDecrementAsync())}> - </button>
        </div>
    )
}

export default AgeCounter