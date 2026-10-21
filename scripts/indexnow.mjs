// Tell Bing (and the other IndexNow search engines) about every URL in the live sitemap,
// so new and updated pages are crawled within hours instead of weeks.
// Run after each deploy:  pnpm indexnow
const SITE = "https://psychiatristinsurat.in";
// Must match public/<KEY>.txt, which proves we own the site.
const KEY = "deedcd1a7d12cd919e38ccd0d4330299";

const sitemap = await (await fetch(`${SITE}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (!urlList.length) throw new Error(`No URLs found in ${SITE}/sitemap.xml`);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(SITE).host,
    key: KEY,
    keyLocation: `${SITE}/${KEY}.txt`,
    urlList,
  }),
});
// 200 = accepted, 202 = accepted and key validation pending.
console.log(`IndexNow: submitted ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
