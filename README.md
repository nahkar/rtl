## Check by Text

```js import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';


describe("App component", () => {
  it("Renders App", () => {
    render(<App/>)
    expect(screen.getByText('React')).toBeInTheDocument();
  });
})
```
also I can use method **getByText** from **render** method

```js 
  it("Renders App", () => {
    const {getByText} = render(<App/>)
    expect(getByText('React')).toBeInTheDocument();
  });
```

## Check snapshot

```js
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
```

## getBy* vs queryBy* vs findBy*

- getBy* returns element or error ***(if need to find element)***
- queryBy* if expect that element doesn't exist in the document ***(if need to show that element doesn't exist in the document)***
- findBy* find for async elements.  ***(before element doesn't exist but after async code element will be pasted)***
- allBy* if we have list of elements we can use it with ***get, query and find***

## Async test
```js
  {user && <h1>{user.name}</h1>}

  -------------------------------

  it('Renders App', async () => {
    render(<App />);
    expect(screen.queryByText('User')).toBeNull();
    expect(await screen.findByText('User')).toBeInTheDocument();
  });
```
## Debug : as a console.log
```js
    screen.debug();
```

## Assertive Functions
![image](https://user-images.githubusercontent.com/4374389/147608510-5864bfb3-a223-4542-b7c7-5ed061933d85.png)

## Imitate user actions by fireEvent
```js
const searchEl = screen.getByTestId('search')
fireEvent.change(searchEl, {
  target: {value: 'Hello'}
});
```