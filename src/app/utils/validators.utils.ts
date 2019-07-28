import { AbstractControl, ValidationErrors } from '@angular/forms';

export const validateNotNull = (control: AbstractControl): ValidationErrors => {
  if (!control.value || !control.value.length) {
    return { notNull: true };
  }

  return null;
};

export const validateUsername = (control: AbstractControl): ValidationErrors => {
  const { value } = control;
  const isAnEmail = /@/;
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (isAnEmail.test(value) && !emailRegex.test(value)) {
    return { email: true };
  }

  if (value.length >= 1 && value.length < 5) {
    return { minLength: true };
  }

  return null;
};

export const validateIrelandPostCode = (control: AbstractControl): ValidationErrors => {
  const { value } = control;
  const iePostCodeRegex = /^[a-zA-Z0-9 ]{6,10}$/;
  if (!!value.length && !iePostCodeRegex.test(value)) {
    return { iePostCode: true };
  }

  return null;
};

export const validateUKPostCode = (control: AbstractControl): ValidationErrors => {
  const { value } = control;
  const ukPostCodeRegex = /^[A-Za-z]{1,2}[0-9Rr][0-9A-Za-z]? [0-9][ABD-HJLNP-UW-Zabd-hjlnp-uw-z]{2}$/;

  if (!!value.length && !ukPostCodeRegex.test(value)) {
    return { ukPostCode: true };
  }

  return null;
};
