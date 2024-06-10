
import React, {useState} from "react"

function MyComponent(){

    const [name, setName] = useState("Guest")
    const [age, setAge] = useState(0)
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName("Bro")
    }

    const incrementAge = () => {
        setAge(age+1)
    }

    const togleEmployedStatus = () => {
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
            <p>Is Employed: {isEmployed ? "YES":"NO"}</p>
            <button onClick={togleEmployedStatus}>Toggle Status</button>
        </div>
    );
}

export default MyComponent