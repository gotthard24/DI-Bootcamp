async function submitHandler(event){
    event.preventDefault()
    const url1 = `https://api.sunrise-sunset.org/json?lat=${event.target.lat1.value}&lng=${event.target.lon1.value}`
    const url2= `https://api.sunrise-sunset.org/json?lat=${event.target.lat2.value}&lng=${event.target.lon2.value}`
    
    try {
        let response = await Promise.all([fetch(url1), fetch(url2)]);
        let responseData = await Promise.all(response.map(res => res.json()));

        console.log(typeof(response));
        console.log(response);
        console.log(typeof(responseData));
        console.log(responseData);
        console.log('Paris');
        console.log(responseData[0].results.sunrise);
        console.log(responseData[0].results.sunset);
        console.log('New York');
        console.log(responseData[1].results.sunrise);
        console.log(responseData[1].results.sunset);
    } catch (error) {
        console.error('Error:', error);
    }
}