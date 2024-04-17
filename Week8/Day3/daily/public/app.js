async function login(event) {
    event.preventDefault()
    const url = 'http://localhost:5001/login';
    const username = event.target.elements['username'].value;
    const password = event.target.elements['password'].value;
    const obj ={
        username,
        password
    }
    console.log(obj);
    try {
        const response = await fetch(url, {
            // mode: 'no-cors',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
          });
        if (!response === 200) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        if(data) logResult(true)
        return data
    } catch (error) {
        console.error(error);
        logResult(false)
    }
}

function logResult(bool) {
    if (!bool){
        alert("Wrong username or password")
    } else {
        window.location.href = 'main.html'
    }
}

function regResult(bool) {
    if (!bool){
        alert("Smth went wrong")
    } else {
        alert("Successfull registered")
    }
}

async function register(event) {
    event.preventDefault()
    const url = 'http://127.0.0.1:5001/register';
    const email = event.target.elements['email'].value;
    const username = event.target.elements['username'].value;
    const first_name = event.target.elements['firstname'].value;
    const last_name = event.target.elements['lastname'].value;
    const password = event.target.elements['password'].value;

    const obj ={
        email,
        username,
        first_name,
        last_name,
        password
    }

    console.log(email,username, firstname, lastname, password);
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(obj)
          });
        if (!response === 200) {
            throw new Error(`${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        if (data) {
            regResult(true)
            window.location.href = 'login.html'
        }
        return data
    } catch (error) {
        console.error(error);
        regResult(false)
    }
}