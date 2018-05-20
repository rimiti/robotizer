import test from "ava";
import Parser from "../../src";

test("getFormatedContent()", (t) => {
  const parser = new Parser();
  console.log(parser.parse().getContent());
  t.is(true, true);
});
