import React, { useRef } from 'react';
import { setCurrentDay } from '../redux/actions';
import {useSelector, useDispatch} from 'react-redux'

const DateSelector = () => {
    const monthRef = useRef(null);
    const dayRef = useRef(null);
    const dispatch = useDispatch()

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const month = monthRef.current.value;
        const day = dayRef.current.value;
        console.log('Month:', month);
        console.log('Day:', day);
        dispatch(setCurrentDay({month, day}))
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="monthSelect">Choose a month:</label>
            <select id="monthSelect" ref={monthRef}>
                <option value="">-- Choose a month --</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>

            <label htmlFor="daySelect">Choose a day:</label>
            <select id="daySelect" ref={dayRef}>
                <option value="">-- Choose a day --</option>
                {[...Array(31).keys()].map((day) => (
                    <option key={day + 1} value={day + 1}>
                        {day + 1}
                    </option>
                ))}
            </select>

            <button type="submit">Submit</button>
        </form>
    );
};

export default DateSelector;
