import test from "ava";
import Utils from "../../src/classes/utils";

test("Should return true", (t) => {
  t.is(Utils.isUserAgent("User-agent: *"), true);
});

test("Should return false", (t) => {
  t.is(Utils.isUserAgent("Uzer-agent: *"), false);
});

test("Should return true", (t) => {
  t.is(Utils.isDisallow("Disallow: /ws/"), true);
});

test("Should return false", (t) => {
  t.is(Utils.isDisallow("Disallow: /ws/"), false);
});

test("Should return true", (t) => {
  t.is(Utils.isSitemap("Sitemap: https://dimsolution.com/sitemap.xml"), true);
});

test("Should return false", (t) => {
  t.is(Utils.isSitemap("Sitemap: https://dimsolution.com/sitemap.xml"), false);
});
