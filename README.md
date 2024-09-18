# Taran Encoder

## Description:

Encodes numbers between 0 and 99_99_99_99_99 to a small 6 character long string.

## Installation:

```shell
npm install @taran28/taran-encoder@latest
```

## Usage:

```javascript
import { encode, decode } from "@taran28/taran-encoder";

const encodedString = encode(123_456);
const decodedString = decode(encodedString);
console.log("Encoded string:", encodedString);
console.log("Decoded string:", decodedString);
```

## Source

Source code is hosted on [GitHub](https://github.com/jlaguma/taran-encoder).
