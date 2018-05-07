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
  t.is(Utils.isDisallow("Disalow: /ws/"), false);
});

test("Should return true", (t) => {
  t.is(Utils.isSitemap("Sitemap: https://dimsolution.com/sitemap.xml"), true);
});

test("Should return false", (t) => {
  t.is(Utils.isSitemap("Sitmap: https://dimsolution.com/sitemap.xml"), false);
});

test("Should return first string item'", (t) => {
  t.throws(() => Utils.explode("Sitemap https://dimsolution.com/sitemap.xml"));
});

test("Should return first string item'", (t) => {
  t.is(Utils.first("Sitemap: https://dimsolution.com/sitemap.xml"), "Sitemap");
});

test("Should return last item '", (t) => {
  t.is(Utils.last("Sitemap: https://dimsolution.com/sitemap.xml"), "https://dimsolution.com/sitemap.xml");
});

test("Should return last item '", (t) => {
  t.is(Utils.last("Sitemap:https://dimsolution.com/sitemap.xml"), "https://dimsolution.com/sitemap.xml");
});
