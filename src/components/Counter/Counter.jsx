"use client";
import React, { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button className="btn btn-accent" onClick={() => setCounter(counter + 1)}>Increment</button>
            <button className="btn btn-secondary" onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
};

export default Counter;