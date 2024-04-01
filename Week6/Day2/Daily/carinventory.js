const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];

  console.log(getCarHonda(inventory))
  console.log(sortCarInventoryByYear(inventory));

  function getCarHonda(arr){
    let newObj
    if (arr.some(item => item.car_make === 'Honda')){
        newObj = arr.find(item => item.car_make === 'Honda')
    }
    let message = `This is a ${newObj.car_make} ${newObj.car_model} from ${newObj.car_year}`
    return message
  }

  function sortCarInventoryByYear(arr){
    let sortedCars = [...arr.sort((a, b) => a.car_year - b.car_year)];
    return sortedCars
  }
