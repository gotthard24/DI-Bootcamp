import { connect, useDispatch, useSelector } from "react-redux"
import { increment, decrement } from "../redux/actions"

const Counter = (props) => {
    return (
        <>
            <h2>Counter Redux</h2>
            <button onClick={props.plus}> + </button>
            <p>count = {props.count}</p>
            <button onClick={props.minus}> - </button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        plus: () => dispatch(increment(1)),
        minus: () => dispatch(decrement(1)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)