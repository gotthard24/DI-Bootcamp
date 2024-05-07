import {useState} from 'react'

const MyInfo = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: ''
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmittedData(formData);
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        });
    }

    const handleReset = (e)=>{
        e.preventDefault()
        setSubmittedData(formData);
        setFormData({
            firstName: '',
            lastName: '',
            phone: '',
            email: ''
        });
    }

    return(
        <div>
            {submittedData ? (
                <div>
                    <h2>Submitted Data</h2>
                    <p>First Name: {submittedData.firstName}</p>
                    <p>Last Name: {submittedData.lastName}</p>
                    <p>Phone: {submittedData.phone}</p>
                    <p>Email: {submittedData.email}</p>
                    <button onClick={handleReset}>Reset</button>
                </div>
            ) : (
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
                <div>
                    <label>Phone:</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            )}
        </div>
    )
}

export default MyInfo