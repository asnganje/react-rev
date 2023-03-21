import './App.css'
import { useState } from "react"
import AnimalShow from "./AnimalShow"

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gater', 'horse']
    return animals[Math.trunc(Math.random()*animals.length)]
}
export default function App() {
    // function makeArray() {
    //     return [1, 10, 32, 40]
    // }

    // // const myArray = makeArray()
    // // const firstElement = myArray[0]
    // // const secondElement = myArray[1]
    // const [firstElement, secondElement] = makeArray()
    // console.log(firstElement, secondElement)
    
    // const [count, setCount] = useState(0);

    // const handleMove = () => {
    //     setCount(count+1);
    // }
    const [animals, setAnimals] = useState([])
    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index) => {
        return <AnimalShow type={animal} key={index}/>
    });

    return(
        
        <div className='app'>
            <button onClick={handleClick}>Add Animal</button>
            <div className='animal-list'>{renderedAnimals}</div>
        </div>
        
    )
}
