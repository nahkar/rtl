import React, { useState } from 'react'

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(0);
  return (
		<div>
			<h1 data-testid="header">Value: {counter}</h1>
			<button data-testid="decrease-btn">Decrease</button>
			<input data-testid="input" type="number" value={inputValue} />
			<button data-testid="increase-btn">Increase</button>
		</div>
	);
}
