import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../index';

describe('Counter tests', () => {
	it('Show header', () => {
		const { getByTestId } = render(<Counter />);
		const headerEl = getByTestId('header');
		expect(headerEl.textContent).toBe('Value: 0');
	});

	it('Show input', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input');
		expect(inputEl).toBeInTheDocument();
	});

	it('Show input', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input');
		expect(inputEl).toBeInTheDocument();
	});

	it('Show increase button', () => {
		const { getByTestId } = render(<Counter />);
		const increaseBtnEl = getByTestId('increase-btn');
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
		expect(inputEl.value).toBe('0');
	});

	it('Change input value', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input') as HTMLInputElement;

		userEvent.type(inputEl, '10');
		expect(inputEl.value).toBe('10');

		userEvent.clear(inputEl);

		userEvent.type(inputEl, '20');
		expect(inputEl.value).toBe('20');
	});

	it('Increase counter', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input') as HTMLInputElement;
		const increaseBtnEl = getByTestId('increase-btn') as HTMLButtonElement;
		const headerEl = getByTestId('header');
		userEvent.type(inputEl, '10');
		userEvent.click(increaseBtnEl);
		userEvent.click(increaseBtnEl);

		expect(headerEl.textContent).toBe('Value: 20');

		userEvent.clear(inputEl);
		userEvent.type(inputEl, '22');
		userEvent.click(increaseBtnEl);
		userEvent.click(increaseBtnEl);
		userEvent.click(increaseBtnEl);

		expect(headerEl.textContent).toBe('Value: 86');
	});

	it('Decrease counter', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input') as HTMLInputElement;
		const decreaseBtnEl = getByTestId('decrease-btn') as HTMLButtonElement;
		const headerEl = getByTestId('header');
		userEvent.type(inputEl, '5');
		userEvent.click(decreaseBtnEl);
		userEvent.click(decreaseBtnEl);

		expect(headerEl.textContent).toBe('Value: -10');

		userEvent.clear(inputEl);
		userEvent.type(inputEl, '10');
		userEvent.click(decreaseBtnEl);
		userEvent.click(decreaseBtnEl);
		userEvent.click(decreaseBtnEl);

		expect(headerEl.textContent).toBe('Value: -40');
	});

	it('Increase and Decrease classes', () => {
		const { getByTestId } = render(<Counter />);
		const inputEl = getByTestId('input') as HTMLInputElement;
		const increaseBtnEl = getByTestId('increase-btn') as HTMLButtonElement;
		const decreaseBtnEl = getByTestId('decrease-btn') as HTMLButtonElement;
		const headerEl = getByTestId('header');
		expect(headerEl.classList.value).toBe('');
		userEvent.type(inputEl, '101');
		userEvent.click(increaseBtnEl);

		expect(headerEl.classList.value).toBe('green');
	
		userEvent.click(decreaseBtnEl);
		userEvent.click(decreaseBtnEl);
		userEvent.click(decreaseBtnEl);
		
		expect(headerEl.classList.value).toBe('red');
	});
});
