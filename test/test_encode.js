/* global describe, it */
"use strict";

var taran = require("../lib/es5/encode");
var assert = require("assert");

var encode = taran.encode;
var assertSame = assert.strictEqual;
var encoderError =
  "Error: Input has to be a decimal number between zero and 99_99_99_99_99.";

describe("Taran Encoder", function () {
  it("should encode numbers correctly with correct input", function () {
    assertSame(encode(123_456), "ybS000");
    assertSame(encode(654_321), "3SQA00");
    assertSame(encode(99_99_99_99_99), "cQfyCe");
    assertSame(encode(123456), "ybS000");
    assertSame(encode(654321), "3SQA00");
    assertSame(encode(9999999999), "cQfyCe");
    assertSame(encode(0), "100000");
    assertSame(encode(1), "200000");
    assertSame(encode(3), "400000");
  });

  it("should fail encoding numbers with incorrect input", function () {
    assertSame(encode("taran"), encoderError);
    assertSame(encode(-1), encoderError);
    assertSame(encode(99_99_99_99_99_99), encoderError);
  });
});
