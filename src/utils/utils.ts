import { CHARSET } from "./constants";
import { Charset, CharsetByChar, CharsetByCode } from "./types";

// Prepare charset for encoding / decoding.
export const charset = (): Charset => {
  const charsetByCode: CharsetByCode = {};
  const charsetByChar: CharsetByChar = {};
  const charsetLen: number = CHARSET.length;

  for (let i = 0; i < charsetLen; i++) {
    const char = CHARSET[i];
    charsetByCode[i] = char;
    charsetByChar[char] = i;
  }

  return { charsetByCode, charsetByChar, charsetLen };
};

// Validate encoder input string.
export const encoderInputIsValid = (number: number): boolean => {
  return (
    Number.isInteger(number) &&
    number % 1 === 0 &&
    number >= 0 &&
    number <= 99_99_99_99_99
  );
};

// Validate decoder input string.
export const decoderInputIsValid = (encodedString: string): boolean => {
  if (encodedString.length !== 6) return false;

  const letters = ["0", ...CHARSET];

  return [...encodedString].every((x) => {
    const index = letters.indexOf(x);

    if (index === -1) {
      return false;
    }

    return true;
  });
};

// Pad string smaller than 6 chars with 0's.
export const pad = (string: string): string => {
  while (string.length < 6) string += "0";

  return string;
};
