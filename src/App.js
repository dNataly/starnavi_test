import {useEffect, useState} from "react";

import './App.css';
import SquareList from "./components/SquareList";
import HoverSquareList from "./components/HoverSquareList";
import Form from "./components/Form";

import {v4 as uuidv4} from "uuid";

function App() {
    const [data, setData] = useState(null);
    const [isHover, setIsHover] = useState([]);
    const [mode, setMode] = useState(localStorage.getItem("mode") ? localStorage.getItem("mode") : 5);

    const BASE_URL = "http://demo7919674.mockable.io/"
    const squareQuantity = mode;

    useEffect(() => {
        fetch(`${BASE_URL}`)
            .then(response => response.json())
            .then((data) => {

                if(data === null) {
                    console.log("data is empty")
                } else {
                    const newData = data.map(data => ({...data, id: uuidv4()}));
                    setData(newData)
                }
            })
    }, []);


    return (
    <div className="App flex my-2 justify-center mx-10">
        <div className="basis-2/4">
            <Form isHover={isHover} setIsHover={setIsHover} data={data} mode={mode} setMode={setMode}/>
            <SquareList data={data} isHover={isHover} setIsHover={setIsHover} mode={mode} squareQuantity={squareQuantity}/>
        </div>
        <HoverSquareList isHover={isHover} setIsHover={setIsHover} squareQuantity={squareQuantity}/>

    </div>
  );
}

export default App;
