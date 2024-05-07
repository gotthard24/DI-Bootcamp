import React, { useState } from 'react';

const BookForm = () => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        genre: '',
        yearPublished: ''
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setSuccessMessage('Form submitted successfully!');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </div>
                <div>
                    <label>Author:</label>
                    <input type="text" name="author" value={formData.author} onChange={handleChange} />
                </div>
                <div>
                    <label>Genre:</label>
                    <input type="text" name="genre" value={formData.genre} onChange={handleChange} />
                </div>
                <div>
                    <label>Year published:</label>
                    <input type="text" name="yearPublished" value={formData.yearPublished} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {<p>{successMessage}</p>}
        </div>
    );
};

export default BookForm;
