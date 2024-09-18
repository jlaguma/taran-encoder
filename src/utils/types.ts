export interface CharsetByCode {
  [propName: number]: string;
}

export interface CharsetByChar {
  [propName: string]: number;
}

export interface Charset {
  charsetByCode: CharsetByCode;
  charsetByChar: CharsetByChar;
  charsetLen: number;
}
