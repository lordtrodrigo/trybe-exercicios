let cars = ['Saab', 'Volvo', 'BMW'];

for (let key in cars) {
  console.log(cars[key]);
} 




let car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
  };
  
  for (let index in car) {
    console.log(index, car[index]);
  }



  let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };



  for (let index in names) {
    console.log('Olá, ' + names[index]);
  }




  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for (let key in car) {
    console.log(key + ': ' + car[key]);
  };