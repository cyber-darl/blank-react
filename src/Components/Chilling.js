import React, {useState, useEffect} from 'react';


var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json' );

ourRequest.onload = () => {
  var ourData = JSON.parse(ourRequest.responseText);
  console.log(ourData[0]);
};
ourRequest.send();

let arrayOne = [2, 40, 6, 80, 10];
const multiFive = (num) => {
return num % 10 !== 0 ;
}
let arrayTwo = arrayOne.filter(multiFive);
console.log(arrayTwo);
const Chilling = () => {
 const [Color, setColor] = useState("red");
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here
  return(
 
    <>
    <h1>I've rendered {count} times!</h1>;
    <h3>My favourite color is {Color}!</h3>
    <button type='button' onClick={() => setColor("red")} >red</button>
    <button type='button' onClick={() => setColor("blue")} >blue</button>
    <button type='button' onClick={() => setColor("pink")} >pink</button>
    <button type='button' onClick={() => setColor("yellow")} >yellow</button>
    <button id='btn' type='button' onClick={() => setColor("yellow")} >Ajax</button>


    </>
  );
};

export default Chilling;