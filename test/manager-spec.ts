import test from "ava";
import { Manager } from "../src";

test("Should test instance name", (t) => {
  const manager: any = new Manager();
  t.is(manager.constructor.name, "Manager");
});
