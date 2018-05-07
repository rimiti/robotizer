import test from "ava";
import Parser from "../src";

test("Should have Parser available", t => {
  t.truthy(true);
});


test("Should run test", t => {
  const parser = new Parser();
  parser.parse();
  t.truthy(true);
});
