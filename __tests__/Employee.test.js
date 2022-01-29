const Employee = require('../lib/Employee');

test('Creates a new employee', () => {
    const employee = new Employee('John Doe', 1234, 'john@doe.com');

    expect(employee.name).toBe("John Doe");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('John Doe', 1234, 'john@doe.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})