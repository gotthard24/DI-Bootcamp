import { useSelector, useDispatch} from 'react-redux'
import { getUsers } from './usersSlice'
import { useRef } from 'react'
import { addUser, addUserPrepare } from './usersSlice'

const Users = (props) =>{
    const inputRef = useRef()
    const inputRef2 = useRef()
    const users = useSelector((state) => state.usersReducer.users)
    const status = useSelector((state) => state.usersReducer.status)
    const dispatch = useDispatch()

    if(status ==='loading') return <h2>Loading ...</h2>

    if(status ==='failed') return <h2>Smth went wrong</h2>

    return(
        <>
        <div>
            <input ref={inputRef} /> <br />
            <input ref={inputRef2} />
            <button onClick={() => dispatch(addUserPrepare(inputRef.current?.value, inputRef2.current?.value))}>Add User</button>
        </div>
        <div>
            <button onClick={() => dispatch(getUsers())}>GetUsers</button>
            {users.map((item, i) =>{
                return <p key={i}>{item.name}</p>
            })}
        </div>
        </>
    )
}

export default Users