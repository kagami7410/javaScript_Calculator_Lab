const {
  sum,
  subtract,
  multiply,
  divide,
  modulus,
  even,
  odd,
} = require("./calculator");

describe('sum', () => { 
  
  test('can add two small positive numbers', () => {
    expected = 5;
    actual = sum(2, 3);
    expect(actual).toBe(expected);
  });

  test('can add two large positive numbers', () => { 
    expected = 1900;
    actual = sum(400, 1500);
    expect(actual).toBe(expected);
  });

  test('can add two negative numbers', () => {
    expected = -1900;
    actual = sum(-400, -1500);
    expect(actual).toBe(expected);
  });

  test('can add zero', () => {
    expected = 1900;
    actual = sum(0, 1900);
    expect(actual).toBe(expected);
  });

});

describe('subtract', () => {

  test('can subract two negative numbers',() => {
    expected = 100;
    actual = subtract(-400, -500);
    expect(actual).toBe(expected);
  })

});

describe('multiply', () => {

  test('can multiply with one negative numbers',() => {
    expected = -20;
    actual = multiply(-4, 5);
    expect(actual).toBe(expected);
  })

  test('can multiply with two negative numbers',() => {
    expected = 20;
    actual = multiply(-4, -5);
    expect(actual).toBe(expected);
  })

});

describe('divide', () => {
  test('can divide numbers',() => {
    expected = 2;
    actual = divide(4, 2);
    expect(actual).toBe(expected);
  })

  test('can divide negative numbers',() => {
    expected = 2;
    actual = divide(-4, -2);
    expect(actual).toBe(expected);
  })

  test('dividing 0 should be 0',() => {
    expected = 0;
    actual = divide(-4, 0);
    expect(actual).toBe(expected);
  })

});

describe('modulus', () => {

  test('can turn negaitive number into positive',() => {
    expected = 2;
    actual = modulus(-2);
    expect(actual).toBe(expected);
  })

  test('if positive just returns the inputted number',() => {
    expected = 2;
    actual = modulus(2);
    expect(actual).toBe(expected);
  })

  test('modulus of -0 should be 0',() => {
    expected = 0;
    actual = modulus(-0);
    expect(actual).toBe(expected);
  })

});

describe('even', () => {
  test('should return true because the input number is even',() => {
    expected = true;
    actual = even(2);
    expect(actual).toBe(expected);
  })

  test('should return false because the input number is not even',() => {
    expected = false;
    actual = even(5);
    expect(actual).toBe(expected);
  })

});

describe('odd', () => {

  test('should return false because the input number is  even',() => {
    expected = false;
    actual = odd(2);
    expect(actual).toBe(expected);
  })


  test('should return true because the input number is  odd',() => {
    expected = true;
    actual = odd(23);
    expect(actual).toBe(expected);
  })

});
