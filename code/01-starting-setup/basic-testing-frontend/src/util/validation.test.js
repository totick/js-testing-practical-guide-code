import { it, expect, describe } from 'vitest';
import { validateStringNotEmpty, validateNumber } from './validation';

/** Validate string not empty tests */

describe('validateStringNotEmpty(value)', () => {
  it('should validate an empty string by throwing an Error', () => {
    //Arrange
    const input = '';
    const expectedResult = /must not be empty/;

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    //Assert
    expect(resultFn).toThrowError(expectedResult);
  });

  it('should not throw an error when sending a character as an input', () => {
    //Arrange
    const input = 'a';

    const resultFn = () => {
      validateStringNotEmpty(input);
    };

    //Assert
    expect(resultFn).not.toThrow();
  });

  it('should throw an error when sending invalid types', () => {
    //Arrange
    const input1 = 0;
    const input2 = true;
    const input3 = [];
    const input4 = {};

    const resultFn1 = () => {
      validateStringNotEmpty(input1);
    };

    const resultFn2 = () => {
      validateStringNotEmpty(input2);
    };

    const resultFn3 = () => {
      validateStringNotEmpty(input3);
    };

    const resultFn4 = () => {
      validateStringNotEmpty(input4);
    };

    //Assert
    expect(resultFn1).toThrowError(TypeError);
    expect(resultFn2).toThrowError(TypeError);
    expect(resultFn3).toThrowError(TypeError);
    expect(resultFn4).toThrowError(TypeError);
  });
});

/** Validate number tests */

describe('validateNumber(number)', () => {
  it('should not throw an error when validating a number', () => {
    //Arrange
    const input1 = 0;
    const input2 = 0.1;

    const resultFn1 = () => {
      validateNumber(input1);
    };
    const resultFn2 = () => {
      validateNumber(input2);
    };

    //Assert
    expect(resultFn1).not.toThrow();
    expect(resultFn2).not.toThrow();
  });

  it('should not throw an error when sending a number as a string', () => {
    //Arrange
    const input = '-1';

    const resultFn = () => {
      validateNumber(input);
    };

    //Assert
    expect(resultFn).not.toThrow();
  });

  it('should throw an error when sent type is not a number', () => {
    //Arrange
    const input1 = true;
    const input2 = 'a';
    const input3 = {};
    const input4 = [];

    const resultFn1 = () => {
      validateNumber(input1);
    };
    const resultFn2 = () => {
      validateNumber(input2);
    };
    const resultFn3 = () => {
      validateNumber(input3);
    };
    const resultFn4 = () => {
      validateNumber(input4);
    };

    //Assert
    expect(resultFn1).toThrowError(/Invalid number input/);
    expect(resultFn2).toThrowError(/Invalid number input/);
    expect(resultFn3).toThrowError(/Invalid number input/);
    expect(resultFn4).toThrowError(/Invalid number input/);
  });
});
