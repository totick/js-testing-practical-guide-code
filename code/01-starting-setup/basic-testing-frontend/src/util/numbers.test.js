import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

it('should take a string with an integer as an argument and convert it to integer', () => {
  //Arrange
  const input = '1';
  const expectedResult = +input;

  //Act
  const result = transformToNumber(input);

  //Assert
  expect(result).toBe(expectedResult);
});

it('should return NaN when sending a character as an argument', () => {
  //Arrange
  const input = 'a';

  //Act
  const result = transformToNumber(input);

  //Assert
  expect(result).toBeNaN();
});

// it('should throw an error when not sending an argument', () => {
//   //Act
//   const resultFn = () => {
//     transformToNumber();
//   };

//   //Assert
//   expect(resultFn).toThrow();
// });
