const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('create a manager onject', () => {
    const manager = new Manager ('mike', '24', 'mike@mikey.com', '2423');

    expect(manager.getName()).toBe('mike');
    expect(manager.getId()).toBe('24');
    expect(manager.getEmail()).toBe('mike@mikey.com');
    expect(manager.getOfficeNumber()).toBe('2423');
    expect(manager.getRole()).toBe('manager');
});