import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUsers } from './userDataSlicer';

const UserData = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.userDataReducer.users);
    const status = useSelector((state) => state.userDataReducer.status);

    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <>
            {status === 'pending' ? (
                <div>
                    <h2>Loading</h2>
                </div>
            ) : (
                <div>
                    <h2>User Data</h2>
                    {users.map((item) => (
                        <div key={item.id}>
                            <p>{item.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default UserData;
