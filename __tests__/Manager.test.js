const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('create a manager onject', () => {
    const manager = new Manager ('');
});

test('get office numer with constructor', () => {
    const testValue = 24;
    const e = new Manager('Foo', 1, 'manager@email.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = 100;
    const e = new Manager('Foo', 1, 'manager@email.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

// Test if the getRole() value is Manager
test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Foo', 1, 'manager@email.com', 24);
    expect(e.getRole()).toBe(testValue);
});