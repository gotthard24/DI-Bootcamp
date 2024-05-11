import './App.css';

function App() {
  const bodyData = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
  };

  const getData = async () => {
    try {
      const res = await fetch('https://webhook.site/97b84010-ccdf-432a-a04d-b477141eef9e', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });
      
      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const contentType = res.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        const text = await res.text(); // Read response as text
        console.error('Response is not valid JSON:', text);
        return;
      }
      
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <button onClick={getData}>POST</button>
    </>
  );
}

export default App;