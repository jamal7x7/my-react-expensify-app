const add = (a, b) => a + b
const greeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
  const result = add(2, 3)
  expect(result).toEqual(5)
})

test('should generate greet with name', () => {
  const result = greeting('jamal')
  expect(result).toEqual('Hello jamal!')
})

test('should generate greet with name', () => {
  const result = greeting()
  expect(result).toEqual('Hello Anonymous!')
})
