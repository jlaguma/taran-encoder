"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const taran_encoder_1 = require("@taran28/taran-encoder");
const encodedString = (0, taran_encoder_1.encode)(123456);
const decodedString = (0, taran_encoder_1.decode)(encodedString);
console.log("Encoded string:", encodedString);
console.log("Decoded string:", decodedString);
