const { expect } = require('@jest/globals');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');

test(' create a employee object', () => {
    const employee = new Employee('Marcus');
});

test('set id with constructor', () => {
    const testValue = 100;
    const e = new Employee('Foo', testValue);
    expect(e.id).toBe(testValue);
});

test('set email with contructor', () => {
    const testValue = 'employee@gmail.com';
    const e = new Employee('Foo', 1, testValue);
    expect(e.email).toBe(testValue);
});