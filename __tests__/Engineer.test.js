const { Engineer } = require('../lib/Engineer');

test('Creates a new Engineer', () => {
  const employee = new Engineer('John Doe', 1234, 'john@doe.com', 'john-doe');

  expect(employee.name).toBe("John Doe");
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
})

test('Checks all methods for Engineer class', () => {
  const employee = new Engineer('John Doe', 1234, 'john@doe.com', 'john-doe');

  expect(employee.getName()).toBe(employee.name);
  expect(employee.getId()).toBe(employee.id);
  expect(employee.getEmail()).toBe(employee.email);
  expect(employee.getGithub()).toBe(employee.github);
  expect(employee.getRole()).toBe('Engineer');
})