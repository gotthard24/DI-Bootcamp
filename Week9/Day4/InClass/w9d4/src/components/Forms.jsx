import { useState } from "react"

const Form = (props) => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [num, setNum] = useState('');
    // const [yesNo, setYesNo] = useState(false);

    const [inputs, setInputs] = useState({})
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputs);
    }

    const handleInputs = (e) => {
        const {value, checked, type, name} = e.target
        // console.log(value, checked, type, name);
        const inputValue = type === 'checkbox' ? checked : value;
        setInputs({ ...inputs, [name]: inputValue})
    }

    return(
        <>
            <h2>Form</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" onChange={(e) => handleInputs(e)} placeholder="Name"/> <br />
                <input name="email" onChange={(e) => handleInputs(e)} type="email" placeholder="Email"/> <br />
                <select name="num" onChange={(e) => handleInputs(e)}>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                </select> <br />
                <label>Yes/No</label> <input name="yesno" onChange={(e) => handleInputs(e)}type="checkbox"/> <br />
                <label>Male</label> <input name="gender" value={'male'} onChange={(e) => handleInputs(e)}type="radio"/> <br />
                <label>Female</label> <input name="gender" value={'female'} onChange={(e) => handleInputs(e)}type="radio"/> <br />
                <button type="submit" value='Submit'>Submit</button>
            </form>
        </>
    )
}

export default Form