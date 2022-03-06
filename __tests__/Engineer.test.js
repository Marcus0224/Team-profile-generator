const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');
const { expect } = require('@jest/globals');

test('create engineer object', () => {
    const engineer = new Engineer('');
});

test('set github account with constructor', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.github).toBe(testValue);
});

test('get github account with getGithub() method', () => {
    const testValue = 'GitHubAccount';
    const e = new Engineer('Foo', 1, 'engineer@email.com', testValue);
    expect(e.getGitHub()).toBe(testValue);
});

test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Foo', 1, 'engineer@email.com', 'GitHubAccount');
    expect(e.getRole()).toBe(testValue);
})