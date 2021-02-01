import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import SmokeText from './SmokeText'

configure({adapter: new Adapter()});

test("Checking for hiding string 1", () => {
    const testString = "Привет";
    const string = shallow(<SmokeText>{testString}</SmokeText>);
    expect(string.text().includes(testString)).toBe(false);
});

test("Checking for hiding string 2", () => {
    const testString = "Москва";
    const string = shallow(<SmokeText>{testString}</SmokeText>);
    expect(string.text().includes(testString)).toBe(false);
});

test("Checking for hiding string 3", () => {
    const testString = "Петя";
    const string = shallow(<SmokeText>{testString}</SmokeText>);
    expect(string.text().includes(testString)).toBe(false);
});