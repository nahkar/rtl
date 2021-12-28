import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
	it('Renders App', async () => {
		render(<App />);

		expect(screen.queryByText('User')).toBeNull();
		expect(await screen.findByText('User')).toBeInTheDocument();

		const searchEl = screen.getByTestId('search');
		fireEvent.change(searchEl, {
			target: { value: 'Hello' }
		});
		expect(screen.queryByText('HelloUser')).toBeInTheDocument();
		fireEvent.change(searchEl, {
			target: { value: '' }
		});
		expect(screen.queryByText('User')).toBeInTheDocument();
	});
});

describe('Events', () => {
	it('checkbox click', () => {
		const handleChange = jest.fn();
		const { container } = render(<input type="checkbox" onChange={handleChange} />);
		const checkbox = container.firstChild!;
		expect(checkbox).not.toBeChecked();
		fireEvent.click(checkbox);
		expect(checkbox).toBeChecked();
	});

	it('input focus', () => {
		const { getByTestId } = render(<input type="text" data-testid="search" />);
		const search = getByTestId('search')!;
		expect(search).not.toHaveFocus();
		search.focus();
		expect(search).toHaveFocus();
	});
});
