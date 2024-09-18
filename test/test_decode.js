/* global describe, it */
"use strict";

var taran = require("../lib/es5/decode");
var assert = require("assert");

var decode = taran.decode;
var assertSame = assert.strictEqual;
var decoderError = "Error: Encoded string is not valid.";

describe("Taran Encoder", function () {
  it("should decode strings correctly with correct input", function () {
    assertSame(decode("ybS000"), 123456);
    assertSame(decode("3SQA00"), 654321);
    assertSame(decode("cQfyCe"), 9999999999);
    assertSame(decode("100000"), 0);
    assertSame(decode("200000"), 1);
    assertSame(decode("400000"), 3);
  });

  it("should fail decoding strings with incorrect input", function () {
    assertSame(decode("ybS00+"), decoderError);
    assertSame(decode(""), decoderError);
  });
});
