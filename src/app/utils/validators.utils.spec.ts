import { FormControl } from '@angular/forms';

import {
  validateIrelandPostCode,
  validateNotNull,
  validateUKPostCode,
  validateUsername
} from './validators.utils';

describe('Validators', () => {
  describe('validateNotNull', () => {
    it('should return notNull error if is null', () => {
      const controlNull = new FormControl(null);
      expect(validateNotNull(controlNull)).toEqual({ notNull: true });
    });

    it('should return notNull error if is an empty string', () => {
      const controlEmptyString = new FormControl('');
      expect(validateNotNull(controlEmptyString)).toEqual({ notNull: true });
    });

    it('should not return an error', () => {
      const control = new FormControl('abc');
      expect(validateNotNull(control)).toEqual(null);
    });
  });

  describe('validateUsername', () => {
    it('should validate as email if contains a @', () => {
      const invalidEmail = new FormControl('invalid@');
      const validEmail = new FormControl('valid@email.com');
      expect(validateUsername(invalidEmail)).toEqual({ email: true });
      expect(validateUsername(validEmail)).toEqual(null);
    });

    it('should contain more than 5 characthers if it is not an email', () => {
      const invalidMinLenght = new FormControl('abc');
      const validMinLenght = new FormControl('abcdefgh');
      expect(validateUsername(invalidMinLenght)).toEqual({ minLength: true });
      expect(validateUsername(validMinLenght)).toEqual(null);
    });

    it('should not contain error if value is empty', () => {
      const emptyControl = new FormControl('');
      expect(validateUsername(emptyControl)).toEqual(null);
    });
  });

  describe('validateIrelandPostCode', () => {
    it('should contain error if value does not match the regex', () => {
      const invalidPostCode = new FormControl('abc');
      const invalidPostCode2 = new FormControl('D09D123*');
      const invalidPostCode3 = new FormControl('D0999999999');
      expect(validateIrelandPostCode(invalidPostCode)).toEqual({ iePostCode: true });
      expect(validateIrelandPostCode(invalidPostCode2)).toEqual({ iePostCode: true });
      expect(validateIrelandPostCode(invalidPostCode3)).toEqual({ iePostCode: true });
    });

    it('should not contain error if value matches the regex', () => {
      const validPostCode = new FormControl('D01F1234');
      const validPostCode2 = new FormControl('d01 f1234');
      expect(validateIrelandPostCode(validPostCode)).toEqual(null);
      expect(validateIrelandPostCode(validPostCode2)).toEqual(null);
    });

    it('should not contain error if value is empty', () => {
      const emptyControl = new FormControl('');
      expect(validateIrelandPostCode(emptyControl)).toEqual(null);
    });
  });

  describe('validateUKPostCode', () => {
    it('should contain error if value does not match the regex', () => {
      const invalidPostCode = new FormControl('abc');
      const invalidPostCode2 = new FormControl('D09D123*');
      const invalidPostCode3 = new FormControl('D0999999999');
      expect(validateUKPostCode(invalidPostCode)).toEqual({ ukPostCode: true });
      expect(validateUKPostCode(invalidPostCode2)).toEqual({ ukPostCode: true });
      expect(validateUKPostCode(invalidPostCode3)).toEqual({ ukPostCode: true });
    });

    it('should not contain error if value matches the regex', () => {
      const validPostCode = new FormControl('DN55 1PT');
      expect(validateUKPostCode(validPostCode)).toEqual(null);
    });

    it('should not contain error if value is empty', () => {
      const emptyControl = new FormControl('');
      expect(validateUKPostCode(emptyControl)).toEqual(null);
    });
  });
});
