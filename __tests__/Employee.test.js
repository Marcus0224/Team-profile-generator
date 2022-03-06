const Employee = require('../lib/Employee');

test('create a employee object', () => {
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

test('getRole() return Employee', () => {
    const testValue = 'Employee';
    const e = new Employee('Marcus', 1, 'employee@gmail.com');
    expect(e.getRole()).toBe(testValue);
});