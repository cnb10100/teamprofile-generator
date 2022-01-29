const { Intern } = require('../lib/Intern');

test('Creates a new Intern', () => {
    const employee = new Intern('John Doe', 1234, 'john@doe.com', 'UofT');

    expect(employee.name).toBe("John Doe");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

test('Checks all methods for Interns class', () => {
    const employee = new Intern('John Doe', 1234, 'john@doe.com', 'UofT');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getSchool()).toBe(employee.school);
    expect(employee.getRole()).toBe('Intern');
})