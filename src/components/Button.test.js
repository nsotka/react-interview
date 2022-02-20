import React from "react";
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from './Button';

let container;

let testReturnFunc = jest.fn(() => true);

let componentToTest = (
    <Button
        action={testReturnFunc}
        classes="btn"
        text="Test text"
        type="button"
    />
)

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

describe('Button tests', () => {

    test('has received props and they work', () => {
        act(() => {
            ReactDOM.render(componentToTest, container);
        })
        const button = container.querySelector('button');

        expect(button.textContent).toBe("Test text");
        expect(button.type).toBe("button");
        expect(button.className).toBe("btn");
        
        act(() => {
            button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });

        expect(testReturnFunc).toHaveReturned();
    })
})