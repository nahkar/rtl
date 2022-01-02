import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
		<div>
			<h1 data-testid="header" className={`${counter >= 100 ? 'green' : ''}${counter <= -100 ? 'red' : ''}`}>
				Value: {counter}
			</h1>
			<button data-testid="decrease-btn" onClick={() => setCounter(counter - inputValue)}>
				Decrease
			</button>
			<input
				data-testid="input"
				type="number"
				value={inputValue}
				onChange={(e) => setInputValue(parseInt(e.target.value))}
			/>
			<button data-testid="increase-btn" onClick={() => setCounter(counter + inputValue)}>
				Increase
			</button>
		</div>
	);
}
