import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

interface SearchProps{
  value: string;
  onChange: (value:string) => void
}

interface User{
  id:  number;
  name: string;
}

const getUser = () => Promise.resolve({id: 1, name: 'User'});

export function Search({value, onChange}:SearchProps) {
  return (
		<div>
			<label htmlFor="search">Search : </label>
			<input id="search" type="text" value={value} onChange={(e) => onChange(e.target.value)} />
		</div>
	);
}


function App() {
  const [user, setUser] = useState<User>(); 
  const [search, setSearch] = useState('')

  useEffect(() => {
    const loadUser = async () => {
      const userData = await getUser();
      setUser(userData);
    };
    loadUser();
  }, []);
  return (
		<div className="App">
			<header className="App-header">
				{user && <h1 data-testid="search">{user.name}</h1>}
				<Search value={search} onChange={setSearch} />
			</header>
		</div>
	);
}

export default App;
