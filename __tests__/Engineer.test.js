const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');

test('create engineer object', () => {
    const engineer = new Engineer('Boo', '1', 'engineer@email.com', 'github');

    expect(engineer.getName()).toBe('Boo');
    expect(engineer.getId()).toBe('1');
    expect(engineer.getEmail()).toBe('engineer@email.com');
    expect(engineer.getGithub()).toBe('github');
    expect(engineer.getRole()).toBe('Engineer');

});