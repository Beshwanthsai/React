import React, { useState } from 'react';
import './counter.css';
function Counter() {
   
    const [count, setCount] = useState(0);

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <div className="counter-value">{count}</div>
            <div className="button-container">
                <button onClick={() => setCount(count - 1)}>-</button>
                <br></br>
                <button onClick={() => setCount(count + 1)}>+</button>
            </div>
        </div>
    );
}

export default Counter; 