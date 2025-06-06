/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://cedrictech.nl",
  generateRobotsTxt: true,
  sitemapSize: 7000, // voldoende voor jouw site, aan te passen
  changefreq: "weekly",
  priority: 0.8,
  exclude: ["/admin/*", "/dashboard/*"], // als je die hebt, anders leeg laten
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
