import test from "ava";
import * as index from "../src";

test("Should have Manager available", t => {
  t.truthy(index.Manager);
});
