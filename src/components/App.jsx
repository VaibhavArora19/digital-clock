import React from "react";
import ReactDOM from "react-dom";

function App() {

    setInterval(updateTime, 1000);
    const now = new Date().toLocaleTimeString();
    const [time, setTime] = React.useState();

    function updateTime() {
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime);
    }

    return <div className="clock">

        <h1 className="time">{now}</h1>
    </div>
}

export default App;