import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	it('Renders App', async () => {
		render(<App />);
		expect(screen.queryByText('User')).toBeNull();
		screen.debug()
		expect(await screen.findByText('User')).toBeInTheDocument();
    screen.debug();
	});
});
