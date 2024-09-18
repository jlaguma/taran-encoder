import { charset, encoderInputIsValid, pad } from "../utils";

/**
 *
 * Input: 135_487 (number)
 * Output: 6 characters long, Base62 encoded string eg. "ABCDEF"
 *
 */
export const encode = (num: number): string => {
  if (!encoderInputIsValid(num)) {
    return "Error: Input has to be a decimal number between zero and 99_99_99_99_99.";
  }

  const { charsetByCode, charsetLen } = charset();
  let result = "";

  if (num === 0) {
    return pad(charsetByCode[0]);
  }

  while (num > 0) {
    result = charsetByCode[num % charsetLen] + result;
    num = Math.floor(num / charsetLen);
  }

  return pad(result);
};
