import { render } from '@testing-library/react';
import Counter from '../index';

describe('Counter tests', () => {

	it('Show header', () => {
	const { getByTestId } = render(<Counter />);
		const headerEl = getByTestId('header')
		expect(headerEl.textContent).toBe('Value: 0')
	});

	it('Show input', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input')
		expect(inputEl).toBeInTheDocument();
	});
	
	it('Show input', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input')
		expect(inputEl).toBeInTheDocument();
	});
	
	it('Show increase button', () => {
		const { getByTestId } = render(<Counter />);
		const increaseBtnEl = getByTestId('increase-btn')
		expect(increaseBtnEl).toBeInTheDocument();
	});
	
	it('Show decrease button', () => {
		const { getByTestId } = render(<Counter />);
		const decreaseBtnEl = getByTestId('decrease-btn');
		expect(decreaseBtnEl).toBeInTheDocument();
	});

	it('Base input value equal 0', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input') as HTMLInputElement;
		expect(inputEl.value).toBe("0");
	});
	
});