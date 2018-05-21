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

test("Should return robots.txt content (Example 2)", (t) => {
  const result = "User-Agent: google-bot\n" +
    "Allow: /google-bot-url-to-allow-1\n" +
    "Allow: /google-bot-url-to-allow-2\n" +
    "Allow: /google-bot-url-to-allow-3\n" +
    "Disallow: /google-bot-url-to-disallow-1\n" +
    "Disallow: /google-bot-url-to-disallow-2\n" +
    "Disallow: /google-bot-url-to-disallow-3\n" +
    "Disallow: /google-bot-url-to-disallow-4\n" +
    "Disallow: /google-bot-url-to-disallow-5\n" +
    "User-Agent: yahoo-bot\n" +
    "Allow: /yahoo-bot-url-to-allow-3\n" +
    "Disallow: /yahoo-bot-url-to-disallow-1\n" +
    "User-Agent: microsoft-bot\n" +
    "Disallow: /microsoft-bot-url-to-disallow-1\n" +
    "Sitemap: https://dimsolution.com/sitemap.xml\n";
  const parser = new Parser();
  parser.addDisallow('google-bot', '/google-bot-url-to-disallow-1');
  parser.addDisallow('google-bot', '/google-bot-url-to-disallow-1');
  parser.addAllow('google-bot', '/google-bot-url-to-allow-1');
  parser.addDisallow('yahoo-bot', '/yahoo-bot-url-to-disallow-1');
  parser.addDisallow('google-bot', '/google-bot-url-to-disallow-2');
  parser.addSitemap('https://dimsolution.com/sitemap.xml');
  parser.addDisallow('yahoo-bot', '/yahoo-bot-url-to-disallow-1');
  parser.addAllow('yahoo-bot', '/yahoo-bot-url-to-allow-3');
  parser.addDisallow('google-bot', '/google-bot-url-to-disallow-3');
  parser.addAllow('google-bot', '/google-bot-url-to-allow-2');
  parser.addDisallow('yahoo-bot', '/yahoo-bot-url-to-disallow-1');
  parser.addDisallow('google-bot', '/google-bot-url-to-disallow-4');
  parser.addAllow('google-bot', '/google-bot-url-to-allow-3');
  parser.addDisallow('microsoft-bot', '/microsoft-bot-url-to-disallow-1');
  parser.addDisallow('google-bot', '/google-bot-url-to-disallow-5');
  t.deepEqual(parser.getContent(), result);
});
