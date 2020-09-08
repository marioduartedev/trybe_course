const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};
const promise = new Promise((resolve, reject) => {
  const randomArray = [];
  for (let i = 0; i < 11; i += 1) {
    const number = Math.floor(Math.random()* 50);
    randomArray.push(number*number);
  }
  const soma = randomArray.reduce((acc, curr) => acc + curr);
  if (soma >= 8000) {
    return reject(soma);
  }
  resolve(soma);
})
.then((number) => {
  divisors = [2, 3, 5, 10];
  return divisors.map(divisor => Math.round(number/divisor));
})
.then(arrayDivided => arrayDivided.reduce((acc, curr) => acc + curr))
.then(answer => console.log(answer))
.catch(number => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then((data) => {
    const container = document.querySelector('#jokeContainer');
    container.innerHTML = data.joke;
  });
};

//window.onload = () => fetchJoke();
