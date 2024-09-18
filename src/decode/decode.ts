import { charset, decoderInputIsValid } from "../utils";

/**
 *
 * Input: 6 characters long, Base62 encoded string eg. "ABCDEF"
 * Output: 135_487 (number)
 *
 */
export const decode = (encStr: string): number | string => {
  if (!decoderInputIsValid(encStr)) {
    return "Error: Encoded string is not valid.";
  }

  const { charsetByChar, charsetLen } = charset();
  // remove padded characters
  const encStr_ = encStr.replace(/0/g, "");
  const encStrLen = encStr_.length;
  let result = 0;

  for (let i = 0; i < encStrLen; i++) {
    const encChar = encStr_[i];

    result += charsetByChar[encChar] * Math.pow(charsetLen, encStrLen - i - 1);
  }

  return result;
};
