/** @type {import('next-sitemap').IConfig} */
const AI_AND_SEARCH_BOTS = [
  "*",
  "Googlebot",
  "Googlebot-Image",
  "Bingbot",
  "DuckDuckBot",
  "Yandex",
  // AI / LLM crawlers — welcomed so the clinic can be surfaced by AI search.
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "GoogleOther",
  "Google-CloudVertexBot",
  "Applebot",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
  "FacebookBot",
  "Bytespider",
  "CCBot",
  "MistralAI-User",
  "DuckAssistBot",
  "cohere-ai",
];

module.exports = {
  siteUrl: "https://psychiatristinsurat.in",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,
  autoLastmod: true,
  // Per-URL priority / changefreq — homepage is the primary landing page.
  transform: async (config, path) => {
    const priorities = { "/": 1.0, "/blogs": 0.8 };
    return {
      loc: path,
      changefreq: path === "/" ? "daily" : "weekly",
      priority: priorities[path] ?? 0.7,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
  // /blogs is a force-dynamic route, so add it explicitly.
  additionalPaths: async (config) => [await config.transform(config, "/blogs")],
  robotsTxtOptions: {
    policies: AI_AND_SEARCH_BOTS.map((userAgent) => ({
      userAgent,
      allow: "/",
    })),
    additionalSitemaps: ["https://psychiatristinsurat.in/sitemap.xml"],
  },
};
