import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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



describe('App component', () => {
	it('UserEvent', async () => {
		render(<App />);

		expect(screen.queryByText('User')).toBeNull();
		expect(await screen.findByText('User')).toBeInTheDocument();

		const searchEl = screen.getByTestId('search');

		userEvent.type(searchEl,'Hello');

		expect(screen.queryByText('HelloUser')).toBeInTheDocument();
    userEvent.clear(searchEl);
		screen.debug()
    expect(screen.queryByText('User')).toBeInTheDocument();
	});
});


describe('Select', () => {
  it('render select', () => {
    const { getByTestId, getAllByTestId } = render(
			<select data-testid="select">
				<option data-testid="select-option" value="1">A</option>
				<option data-testid="select-option" value="2">B</option>
				<option data-testid="select-option" value="3">C</option>
			</select>
		);
    const select = getByTestId('select');
    userEvent.selectOptions(select,"1");
    const options = getAllByTestId('select-option');
    expect((options[0] as HTMLOptionElement).selected).toBeTruthy();
    expect((options[1] as HTMLOptionElement).selected).toBeFalsy();
  })
})
