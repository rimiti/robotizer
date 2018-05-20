import test from "ava";
import Parser from "../src";

test("Should return robots.txt content (Example 1)", (t) => {
  const robotsTxt = "User-Agent: *\n" +
    "Disallow: /*/page-259352913\n" +
    "Disallow: /*/page-579217590\n" +
    "Disallow: /*/page-095739273\n" +
    "Disallow: /*/page-746125914\n" +
    "Disallow: /*/page-836485918\n" +
    "User-Agent: google-bot\n" +
    "Disallow: /google-bot/page-029834618\n" +
    "Disallow: /google-bot/page-954737251\n" +
    "Disallow: /google-bot/page-423457299\n" +
    "Disallow: /google-bot/page-556834745\n" +
    "Disallow: /google-bot/page-345800184\n" +
    "Allow: /google-bot/page-938466117\n" +
    "Sitemap: https://dimsolution.com/sitemap1.xml\n" +
    "Sitemap: https://www.clicrdv.com/sitemap2.xml";
  const result = "User-Agent: google-bot\n" +
    "Allow: /google-bot/page-938466117\n" +
    "Disallow: /google-bot/page-029834618\n" +
    "Disallow: /google-bot/page-345800184\n" +
    "Disallow: /google-bot/page-423457299\n" +
    "Disallow: /google-bot/page-556834745\n" +
    "Disallow: /google-bot/page-954737251\n" +
    "User-Agent: *\n" +
    "Disallow: /*/page-095739273\n" +
    "Disallow: /*/page-259352913\n" +
    "Disallow: /*/page-579217590\n" +
    "Disallow: /*/page-746125914\n" +
    "Disallow: /*/page-836485918\n" +
    "Sitemap: https://dimsolution.com/sitemap1.xml\n" +
    "Sitemap: https://www.clicrdv.com/sitemap2.xml\n";
  const parser = new Parser(robotsTxt);
  t.deepEqual(parser.getContent(), result);
});
