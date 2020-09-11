const math = require('./math');

it('subtrair', () => {
  math.subtrair = jest.fn();
  math.multiplicar = jest.fn().mockReturnValue(10);

  math.subtrair();
  expect(math.subtrair).toHaveBeenCalled();

  expect(math.multiplicar()).toBe(10);
  expect(math.multiplicar).toHaveBeenCalled();
  


})