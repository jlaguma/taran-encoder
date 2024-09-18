import { encode, decode } from "@taran28/taran-encoder";

const encodedString = encode(123_456);
const decodedString = decode(encodedString);
console.log("Encoded string:", encodedString);
console.log("Decoded string:", decodedString);
