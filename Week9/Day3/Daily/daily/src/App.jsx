import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: '',
    age: '',
    gender: '',
    destination: '',
    dietary: {
      Nuts: false,
      Lactose: false,
      Vegan: false
    }
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        dietary: {
          ...formData.dietary,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  return (
    <>
      <form action=''>
        <input type="text" placeholder='First Name' name="name" onChange={handleChange} /> <br />
        <input type="text" placeholder='Last Name' name="lastname" onChange={handleChange} /> <br />
        <input type="text" placeholder='Age' name="age" onChange={handleChange} /> <br />
        <div>
          <label>
            <input type="radio" name="gender" value="Male" onChange={handleChange} />
            Male
          </label>
          <label>
            <input type="radio" name="gender" value="Female" onChange={handleChange} />
            Female
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" name="Nuts" checked={formData.dietary.Nuts} onChange={handleChange} />
            Nuts
          </label>
          <label>
            <input type="checkbox" name="Lactose" checked={formData.dietary.Lactose} onChange={handleChange} />
            Lactose
          </label>
          <label>
            <input type="checkbox" name="Vegan" checked={formData.dietary.Vegan} onChange={handleChange} />
            Vegan
          </label>
        </div>
        <select name="destination" onChange={handleChange}>
          <option value="">Select Destination</option>
          <option value="Thailand">Thailand</option>
          <option value="Japan">Japan</option>
          <option value="Brazil">Brazil</option>
        </select> <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h2>Submitted Data</h2>
        <p>First Name: {formData.name}</p>
        <p>Last Name: {formData.lastname}</p>
        <p>Age: {formData.age}</p>
        <p>Gender: {formData.gender}</p>
        <p>Destination: {formData.destination}</p>
        <p>Dietary Restrictions: {Object.entries(formData.dietary).filter(([key, value]) => value).map(([key, value]) => key).join(', ')}</p>
      </div>
    </>
  )
}

export default App;
